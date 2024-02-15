import { useEffect, useState } from "react";

import { APIConfig } from "../../configs/api.config.constant";
import { http } from "../../configs/axios.config";
import { localStorageService } from "../../services/localstorage-service";
import { Item } from '../../components/organisms/item/item';
import { ListInterface } from '../../types/list';
import {
  StyledWrapper,
  StyledList,
  StyledListTitle,
  StyledItemList
} from "./styled";

export default function Detail() {

  const [ list, setList ] = useState<ListInterface[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const lsService = localStorageService();
        const inMemoryUser = lsService.getToken('user');
  
        const url = APIConfig.CATEGORY.GET_ALL();
        const { data } = await http.get(url, { headers: { Authorization: inMemoryUser.token }});
        
        if (data) {
          const list: ListInterface[] = [];
          for await (const category of data) {
            const urlItemByCategory = APIConfig.ITEM.GET(category._id);
            const { data } = await http.get(urlItemByCategory, { headers: { Authorization: inMemoryUser.token }});
            list.push({ ...category, items: data });
          }
          setList(list);
        }
        
        
      } catch (error: any) {
        throw new Error(error);
      }
    }
    fetchCategories();
  }, [])

  return (
    <StyledWrapper>
      <StyledList>
        {list.map((category: any) => {
          return (
            <li key={category._id}>
              <StyledListTitle>{category.name}</StyledListTitle>
              <div>
                <StyledItemList>
                  {category.items.map((item: any) => <Item key={item._id} entity={item} />)}
                </StyledItemList>
              </div>
            </li>
          )
        })}
      </StyledList>
    </StyledWrapper>
  )
}

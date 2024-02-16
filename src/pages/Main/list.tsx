import { useEffect, useState } from "react";

import { useAdminAuthorized } from "store";
import { APIConfig } from "../../configs/api.config.constant";
import { http } from "../../configs/api.interceptor";
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
  const [ , setAuthorized ] = useAdminAuthorized();

  useEffect(() => {
    async function fetchCategories() {
      try {       
        const url = APIConfig.CATEGORY.GET_ALL();
        const data = await http.get(url);
        
        if (data) {
          const list: ListInterface[] = [];
          for await (const category of data) {
            const urlItemByCategory = APIConfig.ITEM.GET(category._id);
            const data = await http.get(urlItemByCategory);
            list.push({ ...category, items: data });
          }
          setList(list);
        }
      } catch (error: any) {
        if (error.response.status == 401) {
          setAuthorized(false);
        }
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

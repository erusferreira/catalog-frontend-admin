import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuthorized } from "store";

import { APIConfig } from "../../configs/api.config.constant";
import { http } from "../../configs/api.interceptor";
import { localStorageService } from "../../services/localstorage-service";

export default function Main() {
  const navigate = useNavigate();
  
  const [ catalogs, setCatalogs ] = useState([]);  
  const [ , setAuthorized ] = useAdminAuthorized();
  
  useEffect(() => {
    async function fetchApi() {
      try {
        const lsService = localStorageService();
        const isUserAuthenticated = lsService.isDataSaved('user');

        if (!isUserAuthenticated) {
          setAuthorized(false);
          return;
        }

        const merchant = lsService.getData('user').merchant;

        const url = APIConfig.CATALOG.GET(merchant);
        const data = await http.get(url);
        
        if (data) {
          setCatalogs(data)
        }
      } catch (error: any) {
        if (error.response?.status == 401) {
          setAuthorized(false);
        }
      }
    }
    fetchApi();
  }, []);
  
  return (
    <>
      <section onClick={() => navigate('list')} className="bg-light-gray h-height w-screen flex m-auto justify-center cursor-pointer">
        {catalogs.map((catalog: any) => (
          <div key={catalog._id}
               className="bg-white m-3.5 mt-12 w-6/12 shadow-box-shadow grid justify-items-center p-2 h-fit max-w-xs">
              <div className="">
                <img className="max-h-80"
                    src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                />
                <div className="m-1.5">
                  <div className="flex items-center justify-between font-bold text-xl">
                    <p className="">{catalog.name}</p>
                  </div>
                  <p className="pt-1 text-gray-900">{catalog.description}</p>
                </div>
              </div>
          </div>
        ))}
      </section>
    </>
  )
}

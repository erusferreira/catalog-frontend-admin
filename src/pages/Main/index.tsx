import { useState, useEffect } from "react";

import { APIConfig } from "../../configs/api.config.constant";
import { http } from "../../configs/axios.config";
import { useAuthorized, useAdminToken } from "store";

export default function Main() {
  
  const [ catalogs, setCatalogs ] = useState([]);  
  const [ state ] = useAdminToken();
  const [ , setAuthorized ] = useAuthorized();

  async function fetchApi() {
    try {
      const url = APIConfig.CATALOG.GET("654e427ca505d3d5790005e6");
      const { data } = await http.get(url, { headers: { Authorization: state } });
      
      if (data) {
        setCatalogs(data)
      }
    } catch (error: any) {
      if (error.response.status == 401) {
        setAuthorized(false)
      }
      throw new Error(error);
    }
  }
  
  useEffect(() => {
    fetchApi();
  }, []);
  
  return (
    <>
      <section className="bg-light-gray h-height w-screen flex m-auto">
        {catalogs.map((catalog: any) => (
          <div className="bg-white m-3.5 w-6/12 shadow-box-shadow grid justify-items-center">
              <div key={catalog._id}
                   className="">
                <img className="my-3.5"
                     src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                />
                <div className="pt-3 flex items-center justify-between">
                  <p className="">{catalog.name}</p>
                </div>
                <p className="pt-1 text-gray-900">{catalog.description}</p>
              </div>
          </div>
        ))}
      </section>
    </>
  )}
    
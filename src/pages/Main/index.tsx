import { useEffect } from "react";

// import { APIConfig } from "@config/api.config.constant";
// import { http } from "@config/axios.config";
import { APIConfig } from "../../configs/api.config.constant";
import { http } from "../../configs/axios.config";

import { useState } from "react";
import { useCount, useToken } from "store";

// type MainProps = {
//   auth: { token: string };
// }

export default function Main() {
  
  const [catalogs, setCatalogs] = useState([]);  
  const [state, setState] = useCount();
  const [token] = useToken();
  
  
  async function fetchApi() {
    console.log("REMOTE: Main component token:", token)
    
    try {
      const url = APIConfig.CATALOG.GET("654e427ca505d3d5790005e6");
      const { data } = await http.get(url, { headers: { Authorization: token } });
      
      if (data) {
        setCatalogs(data)
      }
    } catch (error) {
      throw new Error(`Erro ao carregar catálogos: ${error}`);
    }
    
  }
  useEffect(() => {
    fetchApi();
  }, []);
  
  
  return (
    <>
    <button className="shared-btn" onClick={() => setState((s) => s + 1)}>
    Click me from remote: {state}
    </button>
    <h1>{token}</h1>
    <section className="bg-white py-8">
    <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
    <span className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
    Cardápios
    </span>
    </div>
    </nav>
    
    {catalogs.map((catalog: any) => (
      <div key={catalog._id} className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
      <a href="#">
      <img
      className="hover:grow hover:shadow-lg"
      src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
      />
      <div className="pt-3 flex items-center justify-between">
      <p className="">{catalog.name}</p>
      </div>
      <p className="pt-1 text-gray-900">{catalog.description}</p>
      </a>
      </div>
      ))}
      
      </div>
      </section>
      </>
      );
    }
    
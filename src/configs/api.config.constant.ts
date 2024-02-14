import { ApiConfigInterface, AppAPIConfig } from "./api.config.interface";

export const APIConfig = {
  CATALOG: {
    GET: (merchantId) => `/catalogs/merchant/${merchantId}`
  } as AppAPIConfig,
  CATEGORY: {
    GET_ALL: () => `/categories`
  } as AppAPIConfig,
  ITEM: {
    GET: (categoryId) => `/items/category/${categoryId}`
  } as AppAPIConfig,
} as ApiConfigInterface;

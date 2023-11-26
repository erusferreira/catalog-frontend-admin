import { ApiConfigInterface, AppAPIConfig } from "./api.config.interface";

export const APIConfig = {
  CATALOG: {
    GET: (merchantId) => `/catalogs/merchant/${merchantId}`,
  } as AppAPIConfig,
} as ApiConfigInterface;

export interface AppAPIConfig {
  GET_ALL?: any;
  GET: (param?: any) => string;
  MOCK_GET?: any;
  DELETE?: any;
  POST?: any;
  PUT?: any;
  PATCH?: any;
}

export interface ApiConfigInterface {
  CATALOG: AppAPIConfig;
  CATEGORY: AppAPIConfig;
  ITEM: AppAPIConfig;
}

import { ItemInterface } from "./item";

export interface ListInterface {
  catalog: string;
  created_at: string;
  description: string;
  is_active: boolean;
  items: ItemInterface;
  name: string;
  updated_at: string;
}

import { SetStateAction, Dispatch } from 'react';

interface UserContextInterface {
  user: UserInterface | null;
  setUser: Dispatch<SetStateAction<UserInterface | null>>;
}

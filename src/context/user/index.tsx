import { createContext, useState } from 'react';

import { UserInterface } from '../../types/user';
import { UserContextInterface } from './types';

export const UserContext = createContext<UserContextInterface>({
  user: null,
  setUser: () => {}
});

export const UserProvider = ({children}: any) => {
  const [user, setUser] = useState<UserInterface | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
}

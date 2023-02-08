import { createContext } from 'react';
import { UserContact, UserData } from '../../interfaces';

export interface ContextProps {
  dataUser: UserData | {};
  contacts: UserContact[];
  selectedContact: UserContact | {};

  loadContactsUser: () => Promise<void>;
  setSelectedUser: (user: UserContact) => void;
  setDataFromLogin: (user: any) => void;
}

export const DataContext = createContext({} as ContextProps);

import { PropsWithChildren, FC, useReducer } from 'react';
import { DataContext, DataReducer } from './';
import { UserData, UserContact } from '../../interfaces';

export interface DataState {
  dataUser: UserData | {};
  contacts: UserContact[];
  selectedContact: UserContact | {};
}
const Data_INITIAL_STATE: DataState = {
  dataUser: {},
  contacts: [],
  selectedContact: {},
};
export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, Data_INITIAL_STATE);

  const loadContactsUser = async () => {
    //AQUI LA CARGA DEL USUARIO DE FIREBASE
    dispatch({
      type: 'Load contacts user',
      payload: [
        {
          name: 'Prueba',
          lastMessage: 'Hola como estas??',
          email: 'jprp_2403@live.com',
          image: 'algo',
          messages: [
            {
              message: 'Adipisicing quis ea ullamco ea reprehenderit dolore.',
              from: 'me',
            },
            {
              message:
                'Mollit nostrud eiusmod magna ea aute. In officia dolor nisi ipsum minim quis. Incididunt amet magna mollit do velit ea. Amet anim nulla cillum laboris laboris commodo irure nisi.',
              from: 'other',
            },
          ],
        },
        {
          name: 'sebas',
          lastMessage: 'Hola como estas??',
          email: 'jprp_2403@live.com',
          image: 'algo',
          messages: [],
        },
        {
          name: 'mama',
          lastMessage: 'Hola como estas??',
          email: 'jprp_2403@live.com',
          image: 'algo',
          messages: [],
        },
        {
          name: 'papa',
          lastMessage: 'Hola como estas??',
          email: 'jprp_2403@live.com',
          image: 'algo',
          messages: [],
        },
        {
          name: 'pao',
          lastMessage: 'Hola como estas??',
          email: 'jprp_2403@live.com',
          image: 'algo',
          messages: [],
        },
        {
          name: 'amor',
          lastMessage: 'Hola como estas??',
          email: 'jprp_2403@live.com',
          image: 'algo',
          messages: [],
        },
        {
          name: 'juan',
          lastMessage: 'Hola como estas??',
          email: 'jprp_2403@live.com',
          image: 'algo',
          messages: [],
        },
        {
          name: 'juan',
          lastMessage: 'Hola como estas??',
          email: 'jprp_2403@live.com',
          image: 'algo',
          messages: [],
        },
      ],
    });
  };
  const setSelectedUser = (user: UserContact) => {
    dispatch({ type: 'Selected contact', payload: user });
  };
  return (
    <DataContext.Provider
      value={{ ...state, loadContactsUser, setSelectedUser }}
    >
      {children}
    </DataContext.Provider>
  );
};

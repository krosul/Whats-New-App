import { UserData, UserContact } from 'interfaces';
import { DataState } from './DataProvider';

type DataActionType =
  | { type: 'Load user data'; payload: UserData }
  | { type: 'Update user data'; payload: UserData }
  | { type: 'Load contacts user'; payload: UserContact[] }
  | { type: 'Update contacts user'; payload: UserContact[] }
  | { type: 'Selected contact'; payload: UserContact };

export const DataReducer = (state: DataState, action: DataActionType) => {
  switch (action.type) {
    case 'Load user data':
      return {
        ...state,
        dataUser: action.payload,
      };
    case 'Update user data':
      return {
        ...state,
        dataUser: action.payload,
      };
    case 'Load contacts user':
      return {
        ...state,
        contacts: [...action.payload],
      };
    case 'Update contacts user':
      return {
        ...state,
        contacts: [...action.payload],
      };

    case 'Selected contact':
      return {
        ...state,
        selectedContact: action.payload,
      };
    default:
      return state;
  }
};

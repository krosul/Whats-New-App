import { UserContact } from './UserContact';

export interface UserData {
  name: string;
  email: string;
  image: string;
  contacts: UserContact[];
}

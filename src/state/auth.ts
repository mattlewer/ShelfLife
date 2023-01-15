import {atom} from 'recoil';
import {Session} from '../interfaces/Session';

export const sessionState = atom<Session | null>({
  key: 'session',
  default: null,
});

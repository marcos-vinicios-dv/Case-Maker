import produce from 'immer';
import { Reducer } from 'redux';
import { User } from '../../../services/hooks/useUser';

const loadUserFromLocalStorage = () => {
  try {
    const serialState = localStorage.getItem('@caseMaker:user');

    if (serialState === null) return { email: '', nome: '', token: '' };

    return JSON.parse(serialState);
  } catch (e) {
    console.warn(e);
    return { email: '', nome: '', token: '' };
  }
};

const setData = (draft, user) => {
  draft.email = user.email;
  draft.nome = user.nome;
  draft.token = user.token;
};

const INITIAL_STATE: User = loadUserFromLocalStorage();

export const user: Reducer<User> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  return produce(state, (draft) => {
    switch (type) {
      case '@user/SIGN_IN_USER':
        setData(draft, payload.user);
        break;

      case '@user/LOGOUT':
        localStorage.removeItem('@caseMaker:user');
        draft.email = '';
        draft.nome = '';
        draft.token = '';
        break;

      case '@user/UPDATE_USER':
        setData(draft, payload.user);

        break;

      default:
        return draft;
    }
  });
};
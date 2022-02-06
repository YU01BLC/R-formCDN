import { atom } from 'recoil';

const formListState = atom({
  key: 'FORM_ITEM_LIST_STATE',
  default: [],
});

const authUserState = atom({
  key: 'AUTH_USER_STATE',
  default: '',
});

const initialState = {
  formListState,
  authUserState,
};

export default initialState;

import { atom } from 'recoil'

const authUserState = atom({
  key: 'AUTH_USER_STATE',
  default: '',
})

// form list

const formListState = atom({
  key: 'FORM_LIST_STATE',
  default: [],
})

const formKeyNumState = atom({
  key: 'FORM_KEY_NUM_STATE',
  default: 1,
})

const initialState = {
  authUserState,
  formListState,
  formKeyNumState,
}

export default initialState

import create from 'zustand'

const useStore = create(set => ({
  user: {},
  updateUser: values => set(state => ({ ...state.user, ...values })),

  authState: false,
  updateAuthState: value => set(state => ({ authState: value })),
}))

export const useGeneralStore = useStore

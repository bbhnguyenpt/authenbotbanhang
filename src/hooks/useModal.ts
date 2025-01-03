import { create } from 'zustand'

type ModalType = 'none' | 'delete-group' | 'create-group' | 'modify-group'

interface ModalStore {
  show_modal: boolean
  type_modal: ModalType
  open_modal: (type: ModalType) => void
  close_modal: () => void
}

const useModal = create<ModalStore>()(set => ({
  show_modal: false,
  type_modal: 'none',
  open_modal: type => set(() => ({ show_modal: true, type_modal: type })),
  close_modal: () => set(() => ({ show_modal: false })),
}))

export default useModal

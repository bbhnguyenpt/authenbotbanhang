import { create } from 'zustand'

type ModalType = 'none' | 'delete-group' | 'create-group' | 'modify-group'

interface ModalStore {
  /**Trạng thái hiển thị của modal */
  show_modal: boolean
  /**Kiểu modal */
  type_modal: ModalType
  /**Hàm mở modal */
  openModal: (type: ModalType) => void
  /**Hàm đóng modal */
  closeModal: () => void
}

const useModal = create<ModalStore>()(set => ({
  show_modal: false,
  type_modal: 'none',
  openModal: type => set(() => ({ show_modal: true, type_modal: type })),
  closeModal: () => set(() => ({ show_modal: false })),
}))

export default useModal

/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'

type ModalType = 'none' | 'delete-group' | 'create-group' | 'modify-group' | "move-page"

interface ModalStore {
  /**Trạng thái hiển thị của modal */
  show_modal: boolean
  /**Kiểu modal */
  type_modal: ModalType
  /**Dữ liệu modal */
  data?: any
  /**Hàm mở modal */
  openModal: (type: ModalType, data?: any) => void
  /**Hàm đóng modal */
  closeModal: () => void
}

const useModal = create<ModalStore>()(set => ({
  show_modal: false,
  type_modal: 'none',
  openModal: (type, data) => set(() => ({ show_modal: true, type_modal: type, data: data })),
  closeModal: () => set(() => ({ show_modal: false })),
}))

export default useModal

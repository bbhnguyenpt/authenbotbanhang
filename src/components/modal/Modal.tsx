'use client'

import { Dialog, DialogTitle } from '@/components/ui/dialog'
import useModal from '@/hooks/useModal'
import DeleteGroupModal from '@/components/modal/delete-group/DeleteGroupModal'
import CreateGroupModal from '@/components/modal/create-group/CreateGroupModal'
import ModifyGroupModal from '@/components/modal/modify-group/ModifyGroupModal'
import MovePageModal from './move-page/MovePageModal'

function Modal() {
  const { type_modal, show_modal } = useModal()

  function renderModal() {
    switch (type_modal) {
      case 'delete-group':
        return <DeleteGroupModal />
      case 'create-group':
        return <CreateGroupModal />
      case 'modify-group':
        return <ModifyGroupModal />
      case 'move-page':
        return <MovePageModal />
    }
  }

  return (
    <Dialog open={Boolean(show_modal)}>
      <DialogTitle className="hidden"></DialogTitle>
      {renderModal()}
    </Dialog>
  )
}

export default Modal

'use client'

import React from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import useModal from '@/hooks/useModal'
import DeleteGroupModal from './delete-group/DeleteGroupModal'

function Modal() {
  const { type_modal, show_modal } = useModal()

  function renderModal() {
    switch (type_modal) {
      case 'delete-group':
        return <DeleteGroupModal />
    }
  }

  return (
    <Dialog open={Boolean(show_modal)}>
      <DialogContent className="m-0 p-0 ">
        <DialogTitle className="hidden"></DialogTitle>
        {renderModal()}
      </DialogContent>
    </Dialog>
  )
}

export default Modal

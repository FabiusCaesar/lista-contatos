import React, { ReactNode } from 'react'
import {
  Button,
  createTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ThemeProvider
} from '@mui/material'

interface ConfirmationDialogProps {
  open: boolean
  title: string
  content: ReactNode
  onConfirm: () => void
  onCancel: () => void
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  open,
  title,
  content,
  onConfirm,
  onCancel
}) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog
        open={open}
        onClose={onCancel}
        aria-labelledby="confirmation-dialog-title"
        aria-describedby="confirmation-dialog-description"
      >
        <DialogTitle id="confirmation-dialog-title">{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button
            onClick={onCancel}
            color="primary"
            sx={{ fontWeight: 'bold' }}
          >
            Cancelar
          </Button>
          <Button
            onClick={onConfirm}
            color="primary"
            sx={{ fontWeight: 'bold' }}
            autoFocus
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  )
}

export default ConfirmationDialog

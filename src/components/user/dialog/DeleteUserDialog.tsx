import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

interface DeleteUserDialogProps {
    id: string;
    name: string;
}

const DeleteUserDialog: React.FC<DeleteUserDialogProps> = ({ name }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                variant="contained"
                color="error"
                onClick={() => setOpen(true)}
            >
                Delete
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete {name}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button
                        color="error"
                        variant="contained"
                        onClick={() => setOpen(false)}
                    >
                        Confirm Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DeleteUserDialog;

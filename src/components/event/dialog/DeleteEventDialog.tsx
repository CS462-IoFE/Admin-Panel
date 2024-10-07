import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

interface DeleteEventDialogProps {
    id: string;
    name: string;
}

const DeleteEventDialog: React.FC<DeleteEventDialogProps> = ({ name }) => {
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
                        Are you sure you want to delete {name}?
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

export default DeleteEventDialog;

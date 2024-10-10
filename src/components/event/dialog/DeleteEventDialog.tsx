import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useDeleteEvent from "../../../custom-hooks/react-query/event/useDeleteEvent";

interface DeleteEventDialogProps {
    id: string;
    name: string;
}

const DeleteEventDialog: React.FC<DeleteEventDialogProps> = ({ id, name }) => {
    const [open, setOpen] = useState(false);
    const { mutate, isSuccess } = useDeleteEvent();

    useEffect(() => {
        if (isSuccess) setOpen(false);
    }, [isSuccess]);

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
                        onClick={() => mutate(id)}
                    >
                        Confirm Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DeleteEventDialog;

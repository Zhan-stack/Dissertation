import React from 'react';
import { Dialog } from '@material-ui/core';
type ImageDialogProps = {
    imageUrl: string,
    show: boolean,
    setShow: Function
}
export default function ImageDialog(props: ImageDialogProps) {
    const {
        imageUrl,
        show,
        setShow
    } = props
    return (
        <Dialog
            open={show}
            maxWidth="md"
            fullWidth
            onClose={() => setShow(false)}>
            <img src={imageUrl} alt="showing" height="500" />
        </Dialog>
    )
}
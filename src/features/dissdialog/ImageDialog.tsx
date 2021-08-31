import React from 'react';
import { Dialog } from '@material-ui/core';
import { useStyles } from '../../Styles';

type ImageDialogProps = {
    imageUrl: string,
    show: boolean,
    setShow: Function
}

export default function ImageDialog(props: ImageDialogProps) {

    const classes = useStyles()

    const {
        imageUrl,
        show,
        setShow
    } = props
    return (
        <div>
            <div className={classes.sectionDesktop}>
                <Dialog
                    open={show}
                    maxWidth="sm"
                    fullWidth
                    onClose={() => setShow(false)}>
                    <img src={imageUrl} alt="showing" />
                </Dialog>
            </div>
            <div className={classes.sectionMoile}>
                <Dialog
                    open={show}
                    maxWidth="md"
                    fullWidth
                    onClose={() => setShow(false)}>
                    <img src={imageUrl} alt="showing" height="750" />
                </Dialog>
            </div>
        </div>
    )
}
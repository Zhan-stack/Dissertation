import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Grid, Button, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { selectShowDissDialog, setShow } from './DissDIalogSlice';
import { buttonReduxClickedPayload } from '../imageswbuttons/ImagesWithButtons'
import { buttonReduxClicked } from '../../AppSlice';
import '../imageswbuttons/ImagesWithButtons.css';


type DissDialogProps = {
    handleClose: Function
}

export default function DissDialog(props: DissDialogProps) {
    const show = useSelector(selectShowDissDialog)

    const {
        handleClose
    } = props

    const dispatch = useDispatch()

    return (
        <Dialog
            open={show}
            maxWidth="sm"
            fullWidth>
            {/* <DialogTitle>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    spacing={1}>
                    <Typography variant="h6">
                        Final Decision
                    </Typography>
                </Grid>
            </DialogTitle> */}
            <DialogContent>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    spacing={1}>
                    <Typography variant="subtitle1">
                        Do you want to change your choice?
                    </Typography>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    spacing={1}>
                    <Grid item>
                        <button
                            id="no"
                            className="button"
                            onClick={() => handleClose(false)}>
                            Look again
                        </button>
                    </Grid>
                    <Grid item>
                        <button
                            id="yes"
                            className="button2"
                            onClick={() => handleClose(true)}>
                            Save my choice
                        </button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    )
}
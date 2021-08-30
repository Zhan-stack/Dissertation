import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Grid, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { selectShowDissDialog, setShow } from './DissDIalogSlice';
import { buttonReduxClickedPayload } from '../imageswbuttons/ImagesWithButtons'
import { buttonReduxClicked } from '../../AppSlice';


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
            maxWidth="md"
            fullWidth>
            <DialogTitle>
                Final Decision
            </DialogTitle>
            <DialogContent>
                Is this your final choice?
            </DialogContent>
            <DialogActions>
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    spacing={1}>
                    <Grid item>
                        <Button
                            id="no"
                            onClick={() => handleClose(false)}>
                            No
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            id="yes"
                            onClick={() => handleClose(true)}>
                            Yes
                        </Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    )
}
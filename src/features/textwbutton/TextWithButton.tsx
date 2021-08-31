import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

type TextWithButtonProps = {
    title: string,
    body: string,
    buttonObj: TextWithButtonButton
}

type TextWithButtonButton = {
    id: string,
    name: string,
    action: Function
}

export default function TextWithButton(props: TextWithButtonProps) {
    const {
        title,
        body,
        buttonObj
    } = props

    return (
        <Grid
            container
            direction="column"
            justify="flex-start"
            spacing={1}
        >
            <Grid item>
                <Typography variant="h4">
                    {title}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">
                    {body}
                </Typography>
            </Grid>
            {/* <Grid item>
                <Grid
                    container
                    direction="row"
                    justify="flex-end">
                    <Grid item>
                        <Button
                            id={buttonObj.id}
                            onClick={() => buttonObj.action()}>
                            {buttonObj.name}
                        </Button>
                    </Grid>
                </Grid> */}
            {/* </Grid> */}
        </Grid >
    )
}
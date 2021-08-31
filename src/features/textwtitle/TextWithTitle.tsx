import React from 'react';
import { Grid, Typography } from '@material-ui/core'

type TextWithTitleProps = {
    title: string,
    body: string
}

export default function TextWithTitle(props: TextWithTitleProps) {
    const {
        title,
        body,
    } = props
    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            spacing={1}
        >
            <Grid item>
                <Typography variant="h6">
                    <b>{title}</b>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="subtitle1">
                    {body}
                </Typography>
            </Grid>
        </Grid>
    )
}
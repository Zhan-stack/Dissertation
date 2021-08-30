import React from 'react';
import { Grid, Typography } from '@material-ui/core'

type TextWithTitleProps = {
    title: string,
    body: string
}

export default function TextWithTitle(props: TextWithTitleProps) {
    const {
        title,
        body
    } = props
    return (
        <Grid
            container
            direction="column"
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
        </Grid>
    )
}
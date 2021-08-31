import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectCorrect } from '../AppSlice';

export default function ThankYou() {
    const correct = useSelector(selectCorrect)

    const [count, setCount] = useState(0)

    useEffect(() => {
        correct.map((bool) => {
            if (bool) {
                setCount(count + 1)
            }
        })
    }, [])

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center">
            <Grid item>
                <img src="group11.png" alt="Thank you" width="400" height="250" />
            </Grid>
            <Grid item>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={8}>
                        <Typography variant="h6" align="center">
                            Thank you for taking part in academic research! You got a score of {(count / 4) * 100} %
                </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
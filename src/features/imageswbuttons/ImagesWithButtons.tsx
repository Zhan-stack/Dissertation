import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import DissDialog from '../dissdialog/DissDialog';
import { useDispatch, useSelector } from 'react-redux';
import {
    addIdToItems, selectColumns, buttonReduxClicked, selectItemIdsSelected, selectPayload, setPayload,
    buttonNoClicked
} from '../../AppSlice';
import { setShow } from '../dissdialog/DissDIalogSlice';
import ImageDialog from '../dissdialog/ImageDialog';
import { Element, Link } from 'react-scroll';
import { useStyles } from '../../Styles';
import './ImagesWithButtons.css';

type ImagesWithButtonsProps = {
    columns: any,
    columnsName: string,
    showDialog: boolean,
    setShowDialog: Function,
    buttonClicked: string,
    setButtonClicked: Function
}

type ImageWithButton = {
    imageUrl: string,
    button: ImageWithButtonButton
}

type ImageWithButtonButton = {
    id: string,
    name: string,
    action: Function,
    correct: boolean
}

export type buttonReduxClickedPayload = {
    eventId: string,
    columnName: string,
    correct: boolean
}

export default function ImagesWithButtons(props: ImagesWithButtonsProps) {
    const {
        columns
    } = props
    const classes = useStyles()

    const itemsIdSelected = useSelector(selectItemIdsSelected)
    const payload = useSelector(selectPayload)

    const [imageShow, setImageShow] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [mouseOverImage, setMouseOverImage] = useState(false)

    const dispatch = useDispatch()

    const handleClose = (bool: boolean) => {
        dispatch(setShow(false))
        console.log(payload)
        if (bool) {
            dispatch(buttonReduxClicked(payload))
        } else {
            dispatch(buttonNoClicked(payload))
        }
        dispatch(setPayload({ eventId: '', columnName: '' }))
    }

    const checkIfSelected = (id: string) => {
        const index = itemsIdSelected.findIndex((selectedIdObj: { id: string, columnName: string }) => selectedIdObj.id === id)
        console.log(index)
        if (index !== -1) {
            return true
        } else {
            return false
        }
    }


    return (

        <Grid
            container
            direction='row'
            justify='center'
            spacing={2}>
            {columns.values.map((column: ImageWithButton) => (
                <Grid item>
                    <Grid
                        container
                        direction='column'
                        justify='center'
                        alignItems='center'
                        spacing={1}>
                        <Grid item>
                            <img

                                // style={{ cursor: mouseOverImage ? 'pointer' : 'default' }}
                                src={column.imageUrl} alt='Hello'
                                width="150" height="300"
                            // onClick={() => {
                            //     setImageShow(true)
                            //     setImageUrl(column.imageUrl)
                            // }} 
                            />
                        </Grid>
                        <Grid item>
                            <button
                                className="button"
                                key={column.button.id}
                                id={column.button.id}
                                disabled={columns.disabled}
                                // color={checkIfSelected(column.button.id) ? 'primary' : undefined}
                                // variant={checkIfSelected(column.button.id) ? 'contained' : undefined}
                                onClick={(e) => {
                                    dispatch(setPayload({ eventId: e.currentTarget.id, columnName: columns.columnName, correct: column.button.correct }))
                                    dispatch(setShow(true))
                                }}>
                                {checkIfSelected(column.button.id) ? "Selected" : columns.disabled ? undefined : column.button.name}
                            </button>
                        </Grid>
                    </Grid>
                </Grid>
            ))
            }
            <DissDialog
                handleClose={handleClose} />
            <ImageDialog
                imageUrl={imageUrl}
                show={imageShow}
                setShow={setImageShow} />
        </Grid >
    )
}
import React, { useState } from 'react';
import { Grid, IconButton, Button, AppBar, Toolbar, Tooltip } from '@material-ui/core';
import TextWithButton from './features/textwbutton/TextWithButton';
import ImagesWithButtons from './features/imageswbuttons/ImagesWithButtons';
import TextWithTitle from './features/textwtitle/TextWithTitle';
import { useSelector } from 'react-redux';
import { selectColumns, selectStartTime, selectItemIdsSelected, selectItemIdsDeselected } from './AppSlice';
import ThankYou from './components/ThankYou';
import { config } from './config';
import MenuIcon from '@material-ui/icons/Menu';

function App() {

  const [showDialog, setShowDialog] = useState(false)
  const [buttonClicked, setButtonClicked] = useState('')
  const [finished, setFinished] = useState(false)

  const columns = useSelector(selectColumns)
  const startTime = useSelector(selectStartTime)
  const selectedIds = useSelector(selectItemIdsSelected)
  const unselectedIds = useSelector(selectItemIdsDeselected)


  const understoodClicked = () => {

  }

  const finishedClickHandler = async () => {
    setFinished(true)
    const timeTaken = (Date.now() - startTime) / 1000
    const data = {
      selectedIds: selectedIds,
      unselectedIds: unselectedIds,
      timeTaken: timeTaken
    }
    console.log((Date.now() - startTime) / 1000)
    console.log(config.domainName)

    const response = await fetch(`${config.domainName}/data`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(data),
      })
    const result = await response.json()
    console.log(result)

  }


  return (
    finished ?
      <ThankYou />
      :
      <Grid
        container
        direction='column'
        justifyContent='space-around'
        alignItems='center'
        spacing={3}
      >
        <AppBar
          position="fixed"
          style={{ backgroundColor: "black" }}>
          <Toolbar variant="dense">
            <Grid
              container
              direction='row'
              justifyContent='flex-start'
              alignItems='flex-end'>

              <Grid item xs={10}>
                <IconButton
                >
                  <MenuIcon
                    style={{ color: "white" }}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Toolbar />

        <Grid item>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={0}>
            <Grid item xs={6}>
              <TextWithButton
                title='Grow your Subcription Business'
                body='Outcome-oriented products that customers will love to buy. Zhan is the best boss in the world! And also the most beautiful. Let me keep writing stuff to see if it wraps the text'
                buttonObj={{
                  id: 'homePage',
                  name: 'Understood',
                  action: understoodClicked
                }}
              />
            </Grid >
            <Grid item >
              <img src='logo512.png' alt='main' height='150' width='150' />
            </Grid>
          </Grid >
        </Grid >
        <Grid item>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={0}>
            <Grid item xs={5}>
              <TextWithTitle
                title='Second Title'
                body='Image is on the right'
              />
            </Grid>
            <Grid item xs={5}>
              <img src='logo512.png' alt='main' height='250' width='250' />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            // direction='row'
            justifyContent='space-evenly'
            spacing={0}>
            <Grid item>
              <ImagesWithButtons
                columns={columns[0]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={0}>
            <Grid item >
              <img src='logo512.png' alt='main' height='250' width='250' />
            </Grid>
            <Grid item >
              <TextWithTitle
                title='Third Title'
                body='Image is on the left'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            // direction='row'
            justifyContent='space-evenly'
            spacing={0}>
            <Grid item>
              <ImagesWithButtons
                columns={columns[1]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={0}>
            <Grid item xs={5}>
              <TextWithTitle
                title='Fourth Title'
                body='Image is on the right'
              />
            </Grid>
            <Grid item xs={5}>
              <img src='logo512.png' alt='main' height='250' width='250' />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            // direction='row'
            justifyContent='space-evenly'
            spacing={0}>
            <Grid item>
              <ImagesWithButtons
                columns={columns[2]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={0}>
            <Grid item >
              <img src='logo512.png' alt='main' height='250' width='250' />
            </Grid>
            <Grid item >
              <TextWithTitle
                title='Fifth Title'
                body='Image is on the left'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            // direction='row'
            justifyContent='space-evenly'
            spacing={0}>
            <Grid item>
              <ImagesWithButtons
                columns={columns[3]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            onClick={() => finishedClickHandler()}>
            Submit
          </Button>
        </Grid>
        <Grid container
          direction='row'
          justifyContent='flex-end'
          alignItems='flex-end'
          spacing={1}>
          <Grid item>
            <Tooltip title="Backend Repo">
              <IconButton>
                <a href='https://github.com/Zhan-stack/Dissertation-Backend' target='_blank'>
                  <img src='github.png' alt='github repo' width='30' height='30' href='' />
                </a>
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Frontend Repo">
              <IconButton>
                <a href='https://github.com/Zhan-stack/Dissertation' target='_blank'>
                  <img src='github.png' alt='github repo' width='30' height='30' href='' />
                </a>
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={1}>
            <Tooltip title="Designs">
              <IconButton>
                <a href='https://www.figma.com/file/kBnn6dPsIBPaG2eDuMTVMp/landing?node-id=2%3A391' target='_blank'>
                  <img src='figma.jpeg' alt='figma design' width='30' height='30' />
                </a>
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>


      </Grid >
  );
}

export default App;

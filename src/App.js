import React, { useState } from 'react';
import { Grid, IconButton, Button } from '@material-ui/core';
import TextWithButton from './features/textwbutton/TextWithButton';
import ImagesWithButtons from './features/imageswbuttons/ImagesWithButtons';
import TextWithTitle from './features/textwtitle/TextWithTitle';
import { useSelector } from 'react-redux';
import { selectColumns } from './AppSlice';
import ThankYou from './components/ThankYou';

function App() {

  const [showDialog, setShowDialog] = useState(false)
  const [buttonClicked, setButtonClicked] = useState("")
  const [finished, setFinished] = useState(false)

  const columns = useSelector(selectColumns)

  const understoodClicked = () => {

  }


  return (
    finished ?
      <ThankYou />
      :
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}>
            <Grid item>
              <TextWithButton
                title="Grow your Subcription Business"
                body="Outcome-oriented products that customers will love to buy. Zhan is the best boss in the world! And also the most beautiful. Let me keep writing stuff to see if it wraps the text"
                buttonObj={{
                  id: "homePage",
                  name: "Understood",
                  action: understoodClicked
                }}
              />
            </Grid >
            <Grid item >
              <img src='logo512.png' alt="main" />
            </Grid>
          </Grid >
        </Grid >
        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={2}>
            <Grid item>
              <TextWithTitle
                title="Second Title"
                body="Image is on the right"
              />
            </Grid>
            <Grid item>
              <img src='logo512.png' alt="main" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            // direction="row"
            justifyContent="space-evenly"
            spacing={2}>
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
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}>
            <Grid item>
              <img src='logo512.png' alt="main" />
            </Grid>
            <Grid item>
              <TextWithTitle
                title="Third Title"
                body="Image is on the left"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            // direction="row"
            justifyContent="space-evenly"
            spacing={2}>
            <Grid item>
              <ImagesWithButtons
                columns={columns[1]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            onClick={() => setFinished(true)}>
            Submit
          </Button>
        </Grid>
        <Grid container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
          spacing={1}>
          <Grid item>
            <IconButton>
              <img src='github.png' alt='github repo' width='50' height='50' />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <img src='figma.jpeg' alt='figma design' width='50' height='50' />
            </IconButton>
          </Grid>
        </Grid>


      </Grid >
  );
}

export default App;

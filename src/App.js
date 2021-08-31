import React, { useState } from 'react';
import { Grid, IconButton, Button, AppBar, Toolbar, Tooltip } from '@material-ui/core';
import TextWithButton from './features/textwbutton/TextWithButton';
import ImagesWithButtons from './features/imageswbuttons/ImagesWithButtons';
import TextWithTitle from './features/textwtitle/TextWithTitle';
import { useSelector } from 'react-redux';
import { selectColumns, selectStartTime, selectItemIdsSelected, selectItemIdsDeselected, selectCorrect } from './AppSlice';
import ThankYou from './components/ThankYou';
import { config } from './config';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css'

function App() {

  const [showDialog, setShowDialog] = useState(false)
  const [buttonClicked, setButtonClicked] = useState('')
  const [finished, setFinished] = useState(false)

  const columns = useSelector(selectColumns)
  const startTime = useSelector(selectStartTime)
  const selectedIds = useSelector(selectItemIdsSelected)
  const unselectedIds = useSelector(selectItemIdsDeselected)
  const correct = useSelector(selectCorrect)


  const understoodClicked = () => {

  }

  const finishedClickHandler = async () => {
    setFinished(true)
    const timeTaken = (Date.now() - startTime) / 1000
    const data = {
      selectedIds: selectedIds,
      unselectedIds: unselectedIds,
      correct: correct,
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
            {/* <Grid
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
            </Grid> */}
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
                title='How good is your eye for design details?'
                body='Birmingham-based UX Software developer Zhanerke Kulmanova has come up with an interesting visual quiz that tests your knowledge and attention to design details. The web-based quiz presents three choices of iOS interface designs, and asks you to pick which one is better performing by your opinion.'
                buttonObj={{
                  id: 'homePage',
                  name: 'Understood',
                  action: understoodClicked
                }}
              />
            </Grid >
            <Grid item >
              <img src='saly-7.png' alt='main' height='150' width='150' />
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
            <Grid item>
              <img src='saly-38.png' alt='main' height='150' width='150' />
            </Grid>
            <Grid item xs={6}>
              <TextWithTitle
                title='Designing a user-friendly login page'
                body="To ensure your users' experience is seamless from the beginning, you should design your login and register screens to be as intuitive as possible. These screens are generally the first step for a user when experiencing your product."
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
              <img src='saly-41.png' alt='main' height='150' width='150' />
            </Grid>
            <Grid item xs={6}>
              <TextWithTitle
                title='Welcome your audience'
                body='Homepages are the first thing a visitor sees when they come to your website. It makes or breaks the impression of your website. It’s a fact that the homepage gets the most views as compared to other pages on your website. The home page also improves the user experience of your website by directing the users to appropriate pages by providing intuitive navigation.'
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
            <Grid item xs={6}>
              <TextWithTitle
                title='What Makes a Great Product Page?'
                body="Your product pages exist to give a potential customer the information they need to decide to buy an item from you while doing so clearly and effectively. When you can effectively communicate your offering in a way that buying feels natural, you can win big. It is when your product pages are boring or difficult to use that you'll struggle to convert browsers into customers."
              />
            </Grid>
            <Grid item >
              <img src='saly-39.png' alt='main' height='150' width='150' />
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
            spacing={1}>
            <Grid item >
              <img src='saly-40.png' alt='main' height='130' width='130' />
            </Grid>
            <Grid item xs={6}>
              <TextWithTitle
                title='Tell Me About Me – User Profiles'
                body='A user profile page, like any other mobile page, is constrained in terms of screen real estate on a smartphone. That means that you don’t want to try and cram too much information on to a profile page or you can make the page too complex for the user to want to interact with. That means focusing some of your design efforts on making the menu systems and the profile page aesthetically pleasing.'
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
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={0}>
            <Grid item xs={5}>
              <TextWithTitle
                title=''
                body='The fact that you are reading this message indicates that you have completed this Questionnaire, and that we owe you a debt of thanks. We truly value the information you have provided. Your responses will contribute to our analyses of creating better UI design solutions.
                You can find your score by clicking Submit button below.'
              />
            </Grid>
            <Grid item >
              <img src='saly-2.png' alt='main' height='150' width='150' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <button
            className="button1"
            onClick={() => finishedClickHandler()}>
            Submit
          </button>
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

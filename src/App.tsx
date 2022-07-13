import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './App.css'
import Player from './components/Player/Player'

const App: React.FC<any> = () => {

  const [songs, setSongs] = React.useState<any>([
    {
      id: 1,
      title: "I'm Just A Kid",
      artist: "Simple Plan",
      filename: "simple.mp3",
      image: "simple.jpg",
      lyrics: "[ Verse 1 ]\nI woke up, it was seven, I waited \'til eleven\nJust to figure out that no one would call\nI think I\'ve got a lot of friends, but I don\'t hear from them\nWhat\'s another night all alone?\nWhen you\'re spending everyday on your own\nAnd here it goes\n\n[ Chorus ]\nI\'m just a kid and life is a nightmare\nI\'m just a kid, I know that it\'s not fair\nNobody cares, \'cause I\'m alone and the world is\nHaving more fun than me\nTonight\n\n[ Verse 2 ]\nAnd maybe when the night is dead, I\'ll crawl into my bed\nI\'m staring at these four walls again\nI\'ll try to think about the last time I had a good time\nEveryone\'s got somewhere to go\nAnd they\'re gonna leave me here on my own\nAnd here it goes\n\n[ Chorus ]\nI\'m just a kid and life is a nightmare\nI\'m just a kid, I know that it\'s not fair\nNobody cares, \'cause I\'m alone and the world is\nHaving more fun than me\n\n[ Post \- Chorus ]\nWhat the hell is wrong with me ? Don\'t fit in with anybody\nHow did this happen to me ?\n    Wide awake I\'m bored and I can\'t fall asleep\nAnd every night is the worst night ever\n\n[ Bridge ]\nI\'m just a kid, I\'m just a kid\nI\'m just a kid, I\'m just a kid, yeah, I\'m just a kid\nI\'m just a kid, I\'m just a kid\nAnd I\'m just a kid, I\'m just a kid, I\'m just a kid\n\n[ Chorus ]\nI\'m just a kid and life is a nightmare\nI\'m just a kid, I know that it\'s not fair\nNobody cares, \'cause I\'m alone and the world is\nNobody wants to be alone in the world\nI\'m just a kid and life is a nightmare\nI\'m just a kid, I know that it\'s not fair\nNobody cares, \'cause I\'m alone and the world is\nNobody wants to be alone in the world\nNobody cares, \'cause I\'m alone and the world is\nHaving more fun than me tonight\n\n[ Outro ]\nI\'m all alone tonight\nNobody cares tonight\n\'Cause I\'m just a kid tonight"
    }
    ,
    {
      id: 2,
      title: "Boulevard of Broken",
      artist: "Green Day",
      filename: "green.mp3",
      image: "green.jpg",
      lyrics: "[ Verse 1 ]\nI walk a lonely road\nThe only one that I have ever known\nDon\'t know where it goes\nBut it\'s home to me, and I walk alone\nI walk this empty street\nOn the Boulevard of Broken Dreams\nWhere the city sleeps\nAnd I\'m the only one, and I walk alone\nI walk alone, I walk alone\nI walk alone, I walk a-\n[ Chorus ]\nMy shadow\'s the only one that walks beside me\nMy shallow heart\'s the only thing that\'s beating\nSometimes I wish someone out there will find me\n\'Til then I walk alone\n\n[ Post-Chorus ]\nAh-ah, ah-ah, ah-ah, ah-ah\nAh-ah, ah-ah, ah-ah\n\n[ Verse 2 ]\nI\'m walking down the line\nThat divides me somewhere in my mind\nOn the borderline\nOf the edge and where I walk alone\nRead between the lines\nWhat\'s fucked up, and everything\'s all right\nCheck my vital signs\nTo know I\'m still alive, and I walk alone\nI walk alone, I walk alone\nI walk alone, I walk a-\n\n[ Chorus ]\nMy shadow\'s the only one that walks beside me\nMy shallow heart\'s the only thing that\'s beating\nSometimes I wish someone out there will find me\n\'Til then I walk alone\n[ Post-Chorus ]\nAh-ah, ah-ah, ah-ah, ah-ah\nAh-ah, ah-ah\nI walk alone, I walk a-\n\n[ Guitar Solo ]\n\n[ Bridge ]\nI walk this empty street\nOn the Boulevard of Broken Dreams\nWhere the city sleeps\nAnd I\'m the only one, and I walk a-\n\n[ Chorus ]\nMy shadow\'s the only one that walks beside me\nMy shallow heart\'s the only thing that\'s beating\nSometimes I wish someone out there will find me\n\'Til then I walk alone\n\n[ Instrumental Outro ]"
    }
    ,
    {
      id: 3,
      title: "Pédaler Vélo",
      artist: "SeckoM Remix",
      filename: "velo.mp3",
      image: "velo.jpg"
    }
    ,
    {
      id: 4,
      title: "Let Me Love You",
      artist: "Mario",
      filename: "mario.mp3",
      image: "mario.jpg"
    }
    ,
    {
      id: 5,
      title: "Miss Independent",
      artist: "Ne-Yo",
      filename: "miss.mp3",
      image: "miss.jpg"
    }
    ,
    {
      id: 6,
      title: "Puaka Kaipeka",
      artist: "BOZY x AS SURE x SUENO",
      filename: "kaipeka.mp3",
      image: "kaipeka.jpg"
    }
    ,
    {
      id: 7,
      title: "Venus",
      artist: "NESLY",
      filename: "venus.mp3",
      image: "venus.jpg"
    }
  ])

  const [show, setShow] = React.useState<boolean>(false)
  const [show1, setShow1] = React.useState<boolean>(true)


  const songsTitleList = songs.map((i: any) => (
    <>
      <li><a key={i.id} onClick={() => handleClick(i)}><span>{i.artist} - {i.title}</span></a></li>


    </>
  ))

  const [selectedSong, setSelectedSong] = React.useState<any>("")

  const handleClick = (param: any) => {
    const index = songs.findIndex((ti: any) => ti.id === param.id)
    // const index = param.id
    setSelectedSong(index)
    setShow(true)
    setShow1(false)
    // setSong(songs[index])
  }

  const handleClose = () => {
    setShow(false)
    setShow1(true)
  }

  return (
    <>
      <Container fluid className='fullSide'>
        <Row>
          {show1 && (<Col className="leftSide">
            <h4 className="py-3">Titres</h4>
            <ul>
              {songsTitleList}
            </ul>
          </Col>)}
          {show && (
            <Col lg={12} className="rightSide pb-3">
              <h4 className="py-3">Lecteur
                <Button className="float-end" onClick={() => handleClose()}>X</Button>
              </h4>
              <Player list={songs} index={selectedSong} />
            </Col>
          )
          }

        </Row>
      </Container>
    </>
  )
}

export default App

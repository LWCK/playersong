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
      image: "simple.jpg"
    }
    ,
    {
      id: 2,
      title: "Boulevard of Broken",
      artist: "Green Day",
      filename: "green.mp3",
      image: "green.jpg"
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

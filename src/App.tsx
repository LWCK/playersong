import React, { useEffect } from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import './App.css'
import CarrouselComponent from './components/CarrouselComponent/CarrouselComponent'
import Player from './components/Player/Player'

const App: React.FC<any> = () => {

  const [songs, setSongs] = React.useState<any>('')

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer keyKjxK8owboF2wel");
    myHeaders.append("Cookie", "brw=brwwHMwX3Ybq5XH1L");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,

    }
    fetch("https://api.airtable.com/v0/appGpVREFApPL54Oe/Sheet%201", requestOptions)
      .then(response => response.json())
      .then(result => setSongs(result))
      .catch(error => console.log('error', error));
  }, []
  )

  // console.log(songs && songs.records[0].fields)

  const [show, setShow] = React.useState<boolean>(true)

  const songsTitleList = songs.records?.map((i: any) =>
    <>
      <li><a onClick={() => handleClick(i)}><span key={i.id.toString()}> {i.fields.artist} - {i.fields.title}</span></a></li>
    </>
  )

  const [selectedSong, setSelectedSong] = React.useState<any>('')

  const handleClick = (param: any) => {
    const index = songs.records.findIndex((i: any) => i.id === param.id)
    setSelectedSong(index)
    setShow(false)
    // console.log(index)
  }
  const handleClose = () => {
    setShow(true)
  }

  return (
    <>
      <Container fluid className='fullSide leftSide'>
        <Row>
          {show ? (
            <>
              <Col xs={12} md={6} xl={5}>
                <CarrouselComponent i={songs.records} event={handleClick} />
              </Col>
              <Col xs={12} md={6} xl={7} className='d-flex align-items-center py-4'>
                <ul>
                  <h4>Titres</h4>
                  {songs && songsTitleList}
                </ul>
              </Col>
            </>
          ) : (
            <Col lg={12} className="rightSide pb-3">
              <h4 className="p-3">Lecteur
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

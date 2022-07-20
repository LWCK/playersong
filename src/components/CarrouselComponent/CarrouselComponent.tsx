import React from 'react'
import './CarrouselComponent.css'
import { Carousel } from 'react-bootstrap'

const CarrouselComponent: React.FC<any> = ({ i, event }: any) => {

    const handleClick = event

    const carrouselList = i?.map((i: any) =>
        <Carousel.Item key={i.id}>
            <img
                className="d-block w-100"
                src={i.fields.image[0].url}
                alt="slide"

                onClick={() => handleClick(i)}
            />
            {/* <Carousel.Caption>
        <h3>{i.fields.title}</h3>
        <p>{i.fields.artist}</p>
      </Carousel.Caption> */}
        </Carousel.Item>
    )


    return (
        <Carousel fade className="carlist" indicators>
            {i && carrouselList}
        </Carousel>
    )
}

export default CarrouselComponent
import React from 'react'
import './Header.css'
import { Container } from 'react-bootstrap'

const Header: React.FC<any> = ({ title }: any) => {

    return (
        <Container fluid className="Header py-2">
            <h1 className="titleHeader">{title}</h1>
        </Container>
    )
}

export default Header
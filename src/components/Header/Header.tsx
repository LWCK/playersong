import React from 'react'
import './Header.css'
import { Container } from 'react-bootstrap'

const Header: React.FC<any> = () => {

    return (
        <Container fluid className="Header py-2">
            <h1 className="titleHeader">Player Song Project</h1>
        </Container>
    )
}

export default Header
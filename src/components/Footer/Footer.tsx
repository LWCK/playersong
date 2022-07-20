import React from 'react'
import './Footer.css'
import { Container } from 'react-bootstrap'

const Footer: React.FC<any> = () => {

    return (
        <Container fluid className="Footer py-3">
            by <strong>iTAHITI LAB</strong>
        </Container>
    )
}

export default Footer
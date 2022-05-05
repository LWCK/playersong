import React from 'react'
import './Footer.css'
import { Container } from 'react-bootstrap'

const Footer: React.FC<any> = () => {

    return (
        <Container fluid className="Footer py-2">
            by <strong>iTahitiLab</strong>
        </Container>
    )
}

export default Footer
import { Container, Row, Col } from 'react-bootstrap';
import './ErrorPage.css'
import seba1 from './../../assets/img/WhatsApp Image 2022-04-17 at 9.48.29 PM copia.png'
import carlos1 from './../../assets/img/carlos-asustado copia.png'
import cami1 from './../../assets/img/cami-asustada.png'
import sergio1 from './../../assets/img/sergio-asustado.png'


const ErrorPage = () => {
    return ( 

    <Container className="d-flex flex-column justify-content-center align-items-center errorPage-style">
        <Row>
            <Col> 
            <h1 className='error-title text-flicker-out-glow'>Error 404</h1>
            </Col>          
        </Row>
        <Row>
        <Col>
            <h3 className='frase-error flicker-4 '>Elige a quien despedir</h3>
            </Col>
        </Row>
        <Row className=''>
            <Col className='d-flex justify-content-center align-items-center' xs={12} md={6} lg={3}>
            <img className='error-group' src={carlos1} alt="" />
            </Col>
            <Col className='d-flex justify-content-center align-items-center' xs={12} md={6} lg={3}>
            <img className='error-group1' src={sergio1} alt="" />
            </Col>
            <Col className='d-flex flex-row justify-content-center align-items-center' xs={12} md={6} lg={3}>
            <img className='error-group' src={cami1} alt="" />
            </Col>
            <Col className='d-flex justify-content-center align-items-center' xs={12} md={6} lg={3}>
            <img className='error-group1' src={seba1} alt="" />
            </Col>
        </Row>
    </Container>
     );
}
 
export default ErrorPage;
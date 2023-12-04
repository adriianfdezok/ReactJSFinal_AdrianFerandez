import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ImagesHome = () => {
  return (
    <Container>
      <Row className='mt-4'>
        <Col xs={12} md={4} my={5}>  <img src="https://i.imgur.com/oRWRMd9.jpg" alt="Primera Imagen" className='w-100' />
        </Col>
        <Col xs={12} md={4} my={5}>  <img src="https://i.imgur.com/cMyNRnq.jpg" alt="Segunda Imagen" className='w-100' />
        </Col>
        <Col xs={12} md={4} my={5}>  <img src="https://i.imgur.com/kH1KzCT.jpg" alt="Tercera Imagen" className='w-100' />
        </Col>
      </Row>
    </Container>
  );
};

export default ImagesHome;
//dejo este componente para luego seguir agregando aqui mas  secciones cuando termine, gracias.
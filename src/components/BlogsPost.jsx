import React from 'react';
import { Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

const BlogsPost = () => {
  return (
    <div>
        <Container className='p-5 mt-2'>
          <Row>

          <Col>
          <Card className='MiServices'>
          <Card.Body>
          <Card.Title>
            Your Title Here  
          </Card.Title>
        </Card.Body>
      </Card>
          </Col>
          <Col>
          <Card>
          <Card.Body>
          <Card.Title>
            Your Title Here  
          </Card.Title>

        </Card.Body>
      </Card>
          </Col>
          </Row>
        </Container>
    </div>
  );
}

export default BlogsPost

// esto mas adelante lo voy a dejar para poner blogs aqui 
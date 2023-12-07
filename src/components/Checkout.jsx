import React, { useContext, useState } from 'react';
import { Container, Row, Col, InputGroup, Button, FormControl } from 'react-bootstrap';
import { addDoc, collection } from 'firebase/firestore';
import { useCartContext } from './ShopContext'; 
import { db } from './firebase';
import Swal from 'sweetalert2';

const Checkout = () => {
  const { cart, removeProduct, PriceFinal } = useCartContext();
  const [user, setUser] = useState({
    name: '',
    phone: '',
    email: '',
    repeatedEmail: '',
  });

  const [emailMatch, setEmailMatch] = useState(true);
  const [formErrors, setFormErrors] = useState({});

  const updateUser = (event) => {
    setUser((user) => ({ ...user, [event.target.name]: event.target.value }));
  };

  const validateEmails = () => {
    return user.email === user.repeatedEmail;
  };

  const validateForm = () => {
    const errors = {};
    if (!user.name) {
      errors.name = 'Campo requerido';
    }
    if (!user.phone) {
      errors.phone = 'Número de teléfono requerido';
    }
    if (!user.repeatedEmail) {
      errors.repeatedEmail = 'Campo requerido';
    }
    setFormErrors(errors);
    setEmailMatch(validateEmails());
    return Object.keys(errors).length === 0 && emailMatch;
  };

  const getOrder = () => {
    const isFormValid = validateForm();

    if (isFormValid) {
      const order = {
        orderId: Date.now(),
        buyer: user,
        items: cart,
        total: PriceFinal(),
      };

      const ordersCollection = collection(db, 'orders');
      addDoc(ordersCollection, order).then(({ id }) => {
        Swal.fire({
          title: `Muchas gracias por tu compra ${user.name}  su total es de ${order.total} `,
          text: `Te hemos enviado un correo a ${user.email} con la orden de compra #${order.orderId}`,
          icon: 'success',
          showCancelButton: false,
          customClass: {
            confirmButton: 'alertButton',
          },
        }).then(function () {
          removeProduct();
          window.location = '/';
        });
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, verifica tus datos',
        icon: 'error',
      });
    }
  };

  return (
    <div>
      <Container className='p-5 mt-2 rounded-5'>
        <Row>
          <Col className='bg-white text-dark'>
            <InputGroup className="mb-1">
              <FormControl
                placeholder="Telefono"
                name="phone"
                type="text"
                onChange={updateUser}
                className="text-black p-2"
              />
            </InputGroup>

            <InputGroup className="mb-1">
              <FormControl
                placeholder="Email"
                name="email"
                type="email"
                onChange={updateUser}
                className="text-black p-2"
              />
            </InputGroup>

            <InputGroup className="mb-1">
              <FormControl
                placeholder="Repetir email"
                name="repeatedEmail"
                type="email"
                onChange={updateUser}
                className="text-black p-2"
              />
              {formErrors.repeatedEmail && <div className="error-message">{formErrors.repeatedEmail}</div>}
              {!emailMatch && <div className="error-message">Los correos electrónicos no coinciden</div>}
            </InputGroup>

            <InputGroup className="mb-1">
              <FormControl
                placeholder="Nombre"
                name="name"
                type="text"
                onChange={updateUser}
                className="text-black p-2"
              />
              {formErrors.name && <div className="error-message">{formErrors.name}</div>}
            </InputGroup>

            <Button variant="success" onClick={getOrder}>
              Comprar
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;

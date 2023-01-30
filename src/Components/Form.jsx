import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Formulario = () => {

    const handleClick = () => {
        window.location.reload();
        alert("Información enviada");
      };

  return (
    <div>
        <h1 style={{margin:"25px"}}>Cuentanos,¿en que te podemos ayudar?</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="Ingrese Correo" />
      </Form.Group>

      <Form.Group>
      <Form.Label>Descripción</Form.Label>
        <Form.Control style={{height:"200px"}} as="textarea" aria-label="With textarea" placeholder="Ingrese Descripción del Pedido"  />
      </Form.Group>

      <Button style={{margin:"25px"}} variant="danger" type="submit" onClick={handleClick}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Formulario
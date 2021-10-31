import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import 'app/components/trabajador/AddTrabajadorForm.css';

const AddTrabajadorForm = ({
    trabajador,
    validated,
    onChange,
    onSubmit
}) => {

    const errorMessage = (message) => {
        return (
            <Form.Control.Feedback type="invalid">
                { message }
            </Form.Control.Feedback>
        );
    }

    return (
        <div className="addTrabajadorForm-container">
            <div className="addTrabajadorForm-title">Add Trabajador</div>
            <Form noValidate onSubmit={onSubmit} className="addTrabajadorForm-inputs">
                <Row>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>Nombres:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                maxLength="60"
                                name="nombres"
                                placeholder="Enter nombres"
                                value={trabajador.nombres}
                                onChange={onChange}
                                isInvalid={validated && trabajador.nombres.length === 0}
                                required
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>ApellidoPaterno:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                maxLength="60"
                                name="apellidoPaterno"
                                placeholder="Enter apellidoPaterno"
                                value={trabajador.apellidoPaterno}
                                onChange={onChange}
                                isInvalid={validated && trabajador.apellidoPaterno.length === 0}
                                required
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>ApellidoMaterno:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                maxLength="60"
                                name="apellidoMaterno"
                                placeholder="Enter apellidoMaterno"
                                value={trabajador.apellidoMaterno}
                                onChange={onChange}
                                isInvalid={validated && trabajador.apellidoMaterno.length === 0}
                                required
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>TipoDocumento:</Form.Label>
                            <Form.Control
                                size="sm"
                                as="select"
                                custom
                                name="tipoDocumento"
                                value={trabajador.tipoDocumento}
                                onChange={onChange}
                                isInvalid={validated && trabajador.tipoDocumento.length === 0}
                                required
                            >
                                <option value="">Select</option>
                                <option value="DNI">DNI</option>
                                <option value="Carnet Extranjeria">Carnet Extranjeria</option>
                                <option value="Pasaporte">Pasaporte</option>
                            </Form.Control>
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>NumeroDocumento:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                maxLength="12"
                                name="numeroDocumento"
                                placeholder="Enter numeroDocumento"
                                value={trabajador.numeroDocumento}
                                onChange={onChange}
                                isInvalid={validated && trabajador.numeroDocumento.length === 0}
                                required
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>Correo:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                maxLength="60"
                                name="correo"
                                placeholder="Enter correo"
                                value={trabajador.correo}
                                onChange={onChange}
                                isInvalid={validated && trabajador.correo.length === 0}
                                required
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="addTrabajadorForm-buttons">
                    <Button type="submit" className="addTrabajadorForm-btn-add">
                        Add
                    </Button>
                    <Link to="/trabajadorList" className="addTrabajadorForm-btn-cancel">
                        Cancel
                    </Link>
                </Row>
            </Form>
        </div>
    );
}

export default AddTrabajadorForm;
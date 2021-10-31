import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import 'app/components/marca/EditMarcaForm.css';

const EditMarcaForm = ({
    marca,
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
        <div className="editMarcaForm-container">
            <div className="editMarcaForm-title">Edit Marca</div>
            <Form noValidate onSubmit={onSubmit} className="editMarcaForm-inputs">
                <Row>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                maxLength="60"
                                name="nombre"
                                placeholder="Enter nombre"
                                value={marca.nombre}
                                onChange={onChange}
                                isInvalid={validated && marca.nombre.length === 0}
                                required
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="editMarcaForm-buttons">
                    <Button type="submit" className="editMarcaForm-btn-edit">
                        Update
                    </Button>
                    <Link to="/marcaList" className="editMarcaForm-btn-cancel">
                        Cancel
                    </Link>
                </Row>
            </Form>
        </div>
    );
}

export default EditMarcaForm;
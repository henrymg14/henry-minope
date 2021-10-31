import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'app/components/usuario/AddUsuarioForm.css';

const AddUsuarioForm = ({
    usuario,
    trabajadorList,
    validated,
    onChange,
    onSelectedTypeahead,
    onChangeInputTypeahead,
    onChangeTypeahead,
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
        <div className="addUsuarioForm-container">
            <div className="addUsuarioForm-title">Add Usuario</div>
            <Form noValidate onSubmit={onSubmit} className="addUsuarioForm-inputs">
                <Row>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                maxLength="8"
                                name="nombre"
                                placeholder="Enter nombre"
                                value={usuario.nombre}
                                onChange={onChange}
                                isInvalid={validated && usuario.nombre.length === 0}
                                required
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>Clave:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                maxLength="30"
                                name="clave"
                                placeholder="Enter clave"
                                value={usuario.clave}
                                onChange={onChange}
                                isInvalid={validated && usuario.clave.length === 0}
                                required
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>Vigencia:</Form.Label>
                            <Form.Check 
                                type="checkbox"
                                name="vigencia"
                                checked={usuario.vigencia === 1 ? true : false}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>IdTrabajador:</Form.Label>
                            <Typeahead
                                size="sm"
                                id="basic-typeahead-single"
                                className={validated && (usuario.idTrabajador === -1 ||
                                    usuario.idTrabajador === 0) && "is-invalid"}
                                placeholder="Choose an option"
                                options={trabajadorList}
                                labelKey={option => String(option.nombres)}
                                selected={onSelectedTypeahead(usuario.idTrabajador)}
                                onInputChange={(newValue) =>
                                    onChangeInputTypeahead('idTrabajador', newValue)}
                                onChange={(newValue) => newValue.length > 0 &&
                                    onChangeTypeahead('idTrabajador', newValue[0].id)}
                                isInvalid={validated && (usuario.idTrabajador === -1 ||
                                    usuario.idTrabajador === 0)}
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="addUsuarioForm-buttons">
                    <Button type="submit" className="addUsuarioForm-btn-add">
                        Add
                    </Button>
                    <Link to="/usuarioList" className="addUsuarioForm-btn-cancel">
                        Cancel
                    </Link>
                </Row>
            </Form>
        </div>
    );
}

export default AddUsuarioForm;
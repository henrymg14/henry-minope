import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'app/components/auto/EditAutoForm.css';

const EditAutoForm = ({
    auto,
    marcaList,
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
        <div className="editAutoForm-container">
            <div className="editAutoForm-title">Edit Auto</div>
            <Form noValidate onSubmit={onSubmit} className="editAutoForm-inputs">
                <Row>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>Modelo:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                maxLength="60"
                                name="modelo"
                                placeholder="Enter modelo"
                                value={auto.modelo}
                                onChange={onChange}
                                isInvalid={validated && auto.modelo.length === 0}
                                required
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>Placa:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                maxLength="8"
                                name="placa"
                                placeholder="Enter placa"
                                value={auto.placa}
                                onChange={onChange}
                                isInvalid={validated && auto.placa.length === 0}
                                required
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>Color:</Form.Label>
                            <Form.Control 
                                size="sm"
                                type="text"
                                maxLength="60"
                                name="color"
                                placeholder="Enter color"
                                value={auto.color}
                                onChange={onChange}
                                isInvalid={validated && auto.color.length === 0}
                                required
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="required">
                            <Form.Label>IdMarca:</Form.Label>
                            <Typeahead
                                size="sm"
                                id="basic-typeahead-single"
                                className={validated && (auto.idMarca === -1 ||
                                    auto.idMarca === 0) && "is-invalid"}
                                placeholder="Choose an option"
                                options={marcaList}
                                labelKey={option => String(option.nombre)}
                                selected={onSelectedTypeahead(auto.idMarca)}
                                onInputChange={(newValue) =>
                                    onChangeInputTypeahead('idMarca', newValue)}
                                onChange={(newValue) => newValue.length > 0 &&
                                    onChangeTypeahead('idMarca', newValue[0].id)}
                                isInvalid={validated && (auto.idMarca === -1 ||
                                    auto.idMarca === 0)}
                            />
                            { errorMessage("Fill in this field.") }
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="editAutoForm-buttons">
                    <Button type="submit" className="editAutoForm-btn-edit">
                        Update
                    </Button>
                    <Link to="/autoList" className="editAutoForm-btn-cancel">
                        Cancel
                    </Link>
                </Row>
            </Form>
        </div>
    );
}

export default EditAutoForm;
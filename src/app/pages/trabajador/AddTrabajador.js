import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { create } from 'services/api';
import AddTrabajadorForm from 'app/components/trabajador/AddTrabajadorForm';
import AlertError from 'app/common/alerts/AlertError';

const AddTrabajador = () => {
    const [ trabajador, setTrabajador ] = useState({
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        tipoDocumento: '',
        numeroDocumento: '',
        correo: ''
    });
    const [ error, setError ] = useState(null);
    const [ validated, setValidated ] = useState(false);
    const history = useHistory();

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setTrabajador({
            ...trabajador,
            [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setValidated(true);
            if (event.currentTarget.checkValidity()) {
                await create('/trabajador', trabajador);
                history.push('/trabajadorList');
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>  
            { error &&
                <AlertError
                    message={error}
                />
            }
            <AddTrabajadorForm
                trabajador={trabajador}
                validated={validated}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default AddTrabajador;
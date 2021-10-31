import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { get, update } from 'services/api';
import EditTrabajadorForm from 'app/components/trabajador/EditTrabajadorForm';
import AlertError from 'app/common/alerts/AlertError';

const EditTrabajador = () => {
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
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchTrabajador = async () => {
            try {
                const data = await get('/trabajador', id);
                setTrabajador({
                    nombres: data.nombres || '',
                    apellidoPaterno: data.apellidoPaterno || '',
                    apellidoMaterno: data.apellidoMaterno || '',
                    tipoDocumento: data.tipoDocumento || '',
                    numeroDocumento: data.numeroDocumento || '',
                    correo: data.correo || ''
                });
            } catch(error) {
                setError(error.message); 
            }
        }
        fetchTrabajador();
    }, [id])

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
                await update('/trabajador', id, trabajador);
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
            <EditTrabajadorForm
                trabajador={trabajador}
                validated={validated}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default EditTrabajador;
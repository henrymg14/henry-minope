import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { get, update } from 'services/api';
import useFetch from 'app/hooks/useFetch';
import EditUsuarioForm from 'app/components/usuario/EditUsuarioForm';
import AlertError from 'app/common/alerts/AlertError';

const EditUsuario = () => {
    const [ usuario, setUsuario ] = useState({
        nombre: '',
        clave: '',
        vigencia: 0,
        idTrabajador: 0
    });
    const [ error, setError ] = useState(null);
    const [ validated, setValidated ] = useState(false);
    const { id } = useParams();
    const trabajadorList = useFetch('/trabajador');
    const history = useHistory();

    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const data = await get('/usuario', id);
                setUsuario({
                    nombre: data.nombre || '',
                    clave: data.clave || '',
                    vigencia: parseInt(data.vigencia),
                    idTrabajador: parseInt(data.idTrabajador)
                });
            } catch(error) {
                setError(error.message); 
            }
        }
        fetchUsuario();
    }, [id])

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ?
                        target.checked ? 1 : 0
                    : target.value;
        const name = target.name;
        setUsuario({
            ...usuario,
            [name]: value
        });
    }

    const handleChangeTypeahead = (name, value) => {
        setUsuario({
            ...usuario,
            [name]: value
        });
    }

    const handleChangeInputTypeahead = (name, newValue) => {
        const data = trabajadorList.data.find((trabajador) => trabajador.nombres === newValue);
        const id = data ? data.id : -1;
        const value = newValue === '' ? 0 : id;
        handleChangeTypeahead(name, value);
    }

    const onSelectedTypeahead = (id) => {
        const data = trabajadorList.data.find((trabajador) => trabajador.id === id);
        const optionSelected = data ? Array(data) : [];
        return optionSelected;
    }

    const isValidated = (event) => {
        return event.currentTarget.checkValidity() && usuario.idTrabajador !== 0 && 
               usuario.idTrabajador !== -1;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setValidated(true);
            if (isValidated(event)) {
                await update('/usuario', id, usuario);
                history.push('/usuarioList');
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
            <EditUsuarioForm
                usuario={usuario}
                trabajadorList={trabajadorList.data}
                validated={validated}
                onChange={handleChange}
                onSelectedTypeahead={onSelectedTypeahead}
                onChangeInputTypeahead={handleChangeInputTypeahead}
                onChangeTypeahead={handleChangeTypeahead}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default EditUsuario;
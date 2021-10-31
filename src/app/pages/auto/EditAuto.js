import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { get, update } from 'services/api';
import useFetch from 'app/hooks/useFetch';
import EditAutoForm from 'app/components/auto/EditAutoForm';
import AlertError from 'app/common/alerts/AlertError';

const EditAuto = () => {
    const [ auto, setAuto ] = useState({
        modelo: '',
        placa: '',
        color: '',
        idMarca: 0
    });
    const [ error, setError ] = useState(null);
    const [ validated, setValidated ] = useState(false);
    const { id } = useParams();
    const marcaList = useFetch('/marca');
    const history = useHistory();

    useEffect(() => {
        const fetchAuto = async () => {
            try {
                const data = await get('/auto', id);
                setAuto({
                    modelo: data.modelo || '',
                    placa: data.placa || '',
                    color: data.color || '',
                    idMarca: parseInt(data.idMarca)
                });
            } catch(error) {
                setError(error.message); 
            }
        }
        fetchAuto();
    }, [id])

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setAuto({
            ...auto,
            [name]: value
        });
    }

    const handleChangeTypeahead = (name, value) => {
        setAuto({
            ...auto,
            [name]: value
        });
    }

    const handleChangeInputTypeahead = (name, newValue) => {
        const data = marcaList.data.find((marca) => marca.nombre === newValue);
        const id = data ? data.id : -1;
        const value = newValue === '' ? 0 : id;
        handleChangeTypeahead(name, value);
    }

    const onSelectedTypeahead = (id) => {
        const data = marcaList.data.find((marca) => marca.id === id);
        const optionSelected = data ? Array(data) : [];
        return optionSelected;
    }

    const isValidated = (event) => {
        return event.currentTarget.checkValidity() && auto.idMarca !== 0 && 
               auto.idMarca !== -1;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setValidated(true);
            if (isValidated(event)) {
                await update('/auto', id, auto);
                history.push('/autoList');
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
            <EditAutoForm
                auto={auto}
                marcaList={marcaList.data}
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

export default EditAuto;
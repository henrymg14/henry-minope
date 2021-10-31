import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { get, update } from 'services/api';
import EditMarcaForm from 'app/components/marca/EditMarcaForm';
import AlertError from 'app/common/alerts/AlertError';

const EditMarca = () => {
    const [ marca, setMarca ] = useState({
        nombre: ''
    });
    const [ error, setError ] = useState(null);
    const [ validated, setValidated ] = useState(false);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchMarca = async () => {
            try {
                const data = await get('/marca', id);
                setMarca({
                    nombre: data.nombre || ''
                });
            } catch(error) {
                setError(error.message); 
            }
        }
        fetchMarca();
    }, [id])

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setMarca({
            ...marca,
            [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setValidated(true);
            if (event.currentTarget.checkValidity()) {
                await update('/marca', id, marca);
                history.push('/marcaList');
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
            <EditMarcaForm
                marca={marca}
                validated={validated}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default EditMarca;
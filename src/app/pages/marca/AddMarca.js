import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { create } from 'services/api';
import AddMarcaForm from 'app/components/marca/AddMarcaForm';
import AlertError from 'app/common/alerts/AlertError';

const AddMarca = () => {
    const [ marca, setMarca ] = useState({
        nombre: ''
    });
    const [ error, setError ] = useState(null);
    const [ validated, setValidated ] = useState(false);
    const history = useHistory();

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
                await create('/marca', marca);
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
            <AddMarcaForm
                marca={marca}
                validated={validated}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default AddMarca;
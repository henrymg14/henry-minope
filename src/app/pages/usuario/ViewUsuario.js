import React from 'react';
import useFetch from 'app/hooks/useFetch';
import usePagination from 'app/hooks/usePagination';
import UsuarioTable from 'app/components/usuario/UsuarioTable';
import AlertError from 'app/common/alerts/AlertError';

const ViewUsuario = () => {
    const { data: usuarioList, loading, error } = useFetch('/usuario');
    const pagination = usePagination(usuarioList);
    const isEmptyList = !error && !loading && usuarioList.length === 0;
   
    return (
        <>
            { error &&
                <AlertError
                    message={error}
                />
            }
            <UsuarioTable
                usuarioList={pagination.currentData}
                pagination={pagination}
                isEmptyList={isEmptyList}
            />
        </>
    );
}

export default ViewUsuario;
import React from 'react';
import useFetch from 'app/hooks/useFetch';
import usePagination from 'app/hooks/usePagination';
import MarcaTable from 'app/components/marca/MarcaTable';
import AlertError from 'app/common/alerts/AlertError';

const ViewMarca = () => {
    const { data: marcaList, loading, error } = useFetch('/marca');
    const pagination = usePagination(marcaList);
    const isEmptyList = !error && !loading && marcaList.length === 0;
   
    return (
        <>
            { error &&
                <AlertError
                    message={error}
                />
            }
            <MarcaTable
                marcaList={pagination.currentData}
                pagination={pagination}
                isEmptyList={isEmptyList}
            />
        </>
    );
}

export default ViewMarca;
import React from 'react';
import useFetch from 'app/hooks/useFetch';
import usePagination from 'app/hooks/usePagination';
import TrabajadorTable from 'app/components/trabajador/TrabajadorTable';
import AlertError from 'app/common/alerts/AlertError';

const ViewTrabajador = () => {
    const { data: trabajadorList, loading, error } = useFetch('/trabajador');
    const pagination = usePagination(trabajadorList);
    const isEmptyList = !error && !loading && trabajadorList.length === 0;
   
    return (
        <>
            { error &&
                <AlertError
                    message={error}
                />
            }
            <TrabajadorTable
                trabajadorList={pagination.currentData}
                pagination={pagination}
                isEmptyList={isEmptyList}
            />
        </>
    );
}

export default ViewTrabajador;
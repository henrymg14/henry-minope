import React from 'react';
import useFetch from 'app/hooks/useFetch';
import usePagination from 'app/hooks/usePagination';
import AutoTable from 'app/components/auto/AutoTable';
import AlertError from 'app/common/alerts/AlertError';

const ViewAuto = () => {
    const { data: autoList, loading, error } = useFetch('/auto');
    const pagination = usePagination(autoList);
    const isEmptyList = !error && !loading && autoList.length === 0;
   
    return (
        <>
            { error &&
                <AlertError
                    message={error}
                />
            }
            <AutoTable
                autoList={pagination.currentData}
                pagination={pagination}
                isEmptyList={isEmptyList}
            />
        </>
    );
}

export default ViewAuto;
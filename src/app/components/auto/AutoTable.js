import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'app/common/pagination/Pagination';
import AlertEmpty from 'app/common/alerts/AlertEmpty';
import { Table } from 'react-bootstrap';
import { FaPlus, FaEdit } from 'react-icons/fa';
import 'app/components/auto/AutoTable.css';

const AutoTable = ({ autoList, pagination, isEmptyList }) => {
    const thead = () => {
        return (
            <tr>
                <th>Number</th>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Color</th>
                <th>IdMarca</th>
                <th>Edit</th>
            </tr>
        );
    }

    const itemList = () => {
        if (autoList.length > 0) {
            let number = pagination.indexOfFirstData + 1;
            return (
                autoList.map((auto) => (
                    <tr key={auto.id}>
                        <th className="autoTable-num">{number++}</th>
                        <td>{auto.modelo}</td>
                        <td>{auto.placa}</td>
                        <td>{auto.color}</td>
                        <td>{auto.idMarca}</td>
                        <td className="autoTable-action">
                            <Link to={"/editAuto/" + auto.id} className="autoTable-icon-edit">
                                <FaEdit />
                            </Link>
                        </td>
                    </tr>
                ))
            );
        }
        return null;
    }

    const emptyList = () => {
        if (isEmptyList) {
            return (
                <tr>
                    <td colSpan={6}><AlertEmpty /></td>
                </tr>
            );
        }
        return null;
    }

    return (
        <>
            <div className="autoTable-container">
                <div className="autoTable-title">Auto List</div>
                <div className="autoTable-content">
                    <div>
                        <Link to="/newAuto" className="autoTable-btn-add">
                            <FaPlus />Add
                        </Link>
                    </div>
                    <Table responsive>
                        <thead className="autoTable-thead">
                            { thead() }
                        </thead>
                        <tbody className="autoTable-tbody">
                            { itemList() || emptyList() }
                        </tbody>
                    </Table>
                    <Pagination pagination={pagination} />
                </div>
            </div>
        </>
    );
}

export default AutoTable;
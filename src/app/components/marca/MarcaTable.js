import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'app/common/pagination/Pagination';
import AlertEmpty from 'app/common/alerts/AlertEmpty';
import { Table } from 'react-bootstrap';
import { FaPlus, FaEdit } from 'react-icons/fa';
import 'app/components/marca/MarcaTable.css';

const MarcaTable = ({ marcaList, pagination, isEmptyList }) => {
    const thead = () => {
        return (
            <tr>
                <th>Number</th>
                <th>Nombre</th>
                <th>Edit</th>
            </tr>
        );
    }

    const itemList = () => {
        if (marcaList.length > 0) {
            let number = pagination.indexOfFirstData + 1;
            return (
                marcaList.map((marca) => (
                    <tr key={marca.id}>
                        <th className="marcaTable-num">{number++}</th>
                        <td>{marca.nombre}</td>
                        <td className="marcaTable-action">
                            <Link to={"/editMarca/" + marca.id} className="marcaTable-icon-edit">
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
                    <td colSpan={3}><AlertEmpty /></td>
                </tr>
            );
        }
        return null;
    }

    return (
        <>
            <div className="marcaTable-container">
                <div className="marcaTable-title">Marca List</div>
                <div className="marcaTable-content">
                    <div>
                        <Link to="/newMarca" className="marcaTable-btn-add">
                            <FaPlus />Add
                        </Link>
                    </div>
                    <Table responsive>
                        <thead className="marcaTable-thead">
                            { thead() }
                        </thead>
                        <tbody className="marcaTable-tbody">
                            { itemList() || emptyList() }
                        </tbody>
                    </Table>
                    <Pagination pagination={pagination} />
                </div>
            </div>
        </>
    );
}

export default MarcaTable;
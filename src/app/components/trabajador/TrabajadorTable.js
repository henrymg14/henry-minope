import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'app/common/pagination/Pagination';
import AlertEmpty from 'app/common/alerts/AlertEmpty';
import { Table } from 'react-bootstrap';
import { FaPlus, FaEdit } from 'react-icons/fa';
import 'app/components/trabajador/TrabajadorTable.css';

const TrabajadorTable = ({ trabajadorList, pagination, isEmptyList }) => {
    const thead = () => {
        return (
            <tr>
                <th>Number</th>
                <th>Nombres</th>
                <th>ApellidoPaterno</th>
                <th>ApellidoMaterno</th>
                <th>TipoDocumento</th>
                <th>NumeroDocumento</th>
                <th>Correo</th>
                <th>Edit</th>
            </tr>
        );
    }

    const itemList = () => {
        if (trabajadorList.length > 0) {
            let number = pagination.indexOfFirstData + 1;
            return (
                trabajadorList.map((trabajador) => (
                    <tr key={trabajador.id}>
                        <th className="trabajadorTable-num">{number++}</th>
                        <td>{trabajador.nombres}</td>
                        <td>{trabajador.apellidoPaterno}</td>
                        <td>{trabajador.apellidoMaterno}</td>
                        <td>{trabajador.tipoDocumento}</td>
                        <td>{trabajador.numeroDocumento}</td>
                        <td>{trabajador.correo}</td>
                        <td className="trabajadorTable-action">
                            <Link to={"/editTrabajador/" + trabajador.id} className="trabajadorTable-icon-edit">
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
                    <td colSpan={8}><AlertEmpty /></td>
                </tr>
            );
        }
        return null;
    }

    return (
        <>
            <div className="trabajadorTable-container">
                <div className="trabajadorTable-title">Trabajador List</div>
                <div className="trabajadorTable-content">
                    <div>
                        <Link to="/newTrabajador" className="trabajadorTable-btn-add">
                            <FaPlus />Add
                        </Link>
                    </div>
                    <Table responsive>
                        <thead className="trabajadorTable-thead">
                            { thead() }
                        </thead>
                        <tbody className="trabajadorTable-tbody">
                            { itemList() || emptyList() }
                        </tbody>
                    </Table>
                    <Pagination pagination={pagination} />
                </div>
            </div>
        </>
    );
}

export default TrabajadorTable;
import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'app/common/pagination/Pagination';
import AlertEmpty from 'app/common/alerts/AlertEmpty';
import { Table } from 'react-bootstrap';
import { FaPlus, FaEdit } from 'react-icons/fa';
import 'app/components/usuario/UsuarioTable.css';

const UsuarioTable = ({ usuarioList, pagination, isEmptyList }) => {
    const thead = () => {
        return (
            <tr>
                <th>Number</th>
                <th>Nombre</th>
                <th>Clave</th>
                <th>Vigencia</th>
                <th>IdTrabajador</th>
                <th>Edit</th>
            </tr>
        );
    }

    const itemList = () => {
        if (usuarioList.length > 0) {
            let number = pagination.indexOfFirstData + 1;
            return (
                usuarioList.map((usuario) => (
                    <tr key={usuario.id}>
                        <th className="usuarioTable-num">{number++}</th>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.clave}</td>
                        <td>{usuario.vigencia}</td>
                        <td>{usuario.idTrabajador}</td>
                        <td className="usuarioTable-action">
                            <Link to={"/editUsuario/" + usuario.id} className="usuarioTable-icon-edit">
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
            <div className="usuarioTable-container">
                <div className="usuarioTable-title">Usuario List</div>
                <div className="usuarioTable-content">
                    <div>
                        <Link to="/newUsuario" className="usuarioTable-btn-add">
                            <FaPlus />Add
                        </Link>
                    </div>
                    <Table responsive>
                        <thead className="usuarioTable-thead">
                            { thead() }
                        </thead>
                        <tbody className="usuarioTable-tbody">
                            { itemList() || emptyList() }
                        </tbody>
                    </Table>
                    <Pagination pagination={pagination} />
                </div>
            </div>
        </>
    );
}

export default UsuarioTable;
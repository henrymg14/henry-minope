import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from 'app/common/navBar/NavBar';
import Home from 'app/pages/home/Home';
import ViewAuto from 'app/pages/auto/ViewAuto';
import AddAuto from 'app/pages/auto/AddAuto';
import EditAuto from 'app/pages/auto/EditAuto';
import ViewMarca from 'app/pages/marca/ViewMarca';
import AddMarca from 'app/pages/marca/AddMarca';
import EditMarca from 'app/pages/marca/EditMarca';
import ViewTrabajador from 'app/pages/trabajador/ViewTrabajador';
import AddTrabajador from 'app/pages/trabajador/AddTrabajador';
import EditTrabajador from 'app/pages/trabajador/EditTrabajador';
import ViewUsuario from 'app/pages/usuario/ViewUsuario';
import AddUsuario from 'app/pages/usuario/AddUsuario';
import EditUsuario from 'app/pages/usuario/EditUsuario';
import 'App.css';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <div className="app-container">
                    <Switch>
                        <Route path="/home" exact><Home/></Route>
                        <Route path="/autoList" exact><ViewAuto/></Route>
                        <Route path="/newAuto" exact><AddAuto/></Route>
                        <Route path="/editAuto/:id" exact><EditAuto/></Route>
                        <Route path="/marcaList" exact><ViewMarca/></Route>
                        <Route path="/newMarca" exact><AddMarca/></Route>
                        <Route path="/editMarca/:id" exact><EditMarca/></Route>
                        <Route path="/trabajadorList" exact><ViewTrabajador/></Route>
                        <Route path="/newTrabajador" exact><AddTrabajador/></Route>
                        <Route path="/editTrabajador/:id" exact><EditTrabajador/></Route>
                        <Route path="/usuarioList" exact><ViewUsuario/></Route>
                        <Route path="/newUsuario" exact><AddUsuario/></Route>
                        <Route path="/editUsuario/:id" exact><EditUsuario/></Route>
                        <Redirect to="/home"></Redirect>
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
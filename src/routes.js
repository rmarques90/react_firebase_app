import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';

export default function Routes() {
    return (
        <Switch>
            <Route path={"/"} exact={true} component={Login} />
            <Route path={"/register"} exact={true} component={RegisterForm} />
            <Route path="*" component={Page404} />
        </Switch>
    )
}

const Page404 = () => {
    return (
        <div>
            Página nao encontrada!
        </div>
    )
}
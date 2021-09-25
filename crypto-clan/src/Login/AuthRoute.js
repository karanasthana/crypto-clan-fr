import React from 'react';
import { Redirect, Route } from 'react-router';

const AuthRoute = props => {
    // const { isAuthUser, type } = props;
    if (global.isLoggedIn) {
        return <Redirect to="/home" />;
    }
    // else if (type === 'private' && !isAuthUser) return <Redirect to="/" />;

    return <Route {...props} />;
};

export default AuthRoute;
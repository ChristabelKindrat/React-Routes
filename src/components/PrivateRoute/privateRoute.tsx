import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {Home} from '../../pages';

function PrivateRoute ({ component: Component, ...rest} : any){
    // @ts-ignore
    let obj = JSON.parse(localStorage.getItem('user'));

    return (
        <Route
            {...rest}
            render={(props) => {
                if (obj) {
                    return <Home/>;
                } else {
                    return <Redirect to={{ pathname: '/login' }} />;
                }
            }}
        />

    );
}

export {PrivateRoute};
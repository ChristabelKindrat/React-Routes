import React from 'react';
import {Route, Switch} from "react-router-dom";

import './App.css';
import {Login, PrivateRoute} from "./components";
import {Home} from "./pages";

function App() {

    return (
        <div className="App">
            <Switch>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <PrivateRoute path={'/'} component={<Home/>}/>
            </Switch>
        </div>
    );
}
export default App;

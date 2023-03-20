import React, {useEffect, useState} from 'react';
import {Link, Route, Switch, useRouteMatch} from 'react-router-dom';

import {IUser} from "../../interfaces";
import {User} from '../../components';
import {getUsers} from "../../services";
import './users.style.scss';

function Users() {
    const [users, setUsers] = useState<IUser[]>([]);
    let {path, url} = useRouteMatch();

    useEffect(() => {
        getUsers().then(({data}) => setUsers(data));
    }, [users]);

    return (
        <ul className={'ul_wrap'}>
            {users.map(user =>
                <li key={user.id}>
                    <Link to={`${url}/${user.id}`}>{user.name}</Link>
                    <Switch>
                        <Route exact path={`${path}/${user.id}`}>
                            <User name={user.name}
                                  email={user.email}
                                  phone={user.phone}
                                  id={user.id}
                                  username={user.username}
                                  adress={user.adress}
                                  website={user.website}
                                  company={user.company}
                                  key={user.id}
                            />
                        </Route>
                    </Switch>
                </li>
            )}
        </ul>
    );
}

export {Users};
import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import './home.style.scss';
import {Main} from "../Main/main";
import {Posts} from "../Posts/posts";
import {Users} from "../Users/users";
import {NotFound} from "../NotFound/notFound";

function Home() {
    return (
        <>
            <div className={'header'}>
           <Link to={'/'}>Main</Link>
           <Link to={'/posts'}>Posts</Link>
           <Link to={'/users'}>Users</Link>
           <Link to={'/login'}>
               <button>Log Out</button>
           </Link>
            </div>
            <div className={'content'}>
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route path="/posts">
                        <Posts />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route exact path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export {Home};
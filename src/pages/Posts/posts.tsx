import React, {useEffect, useState} from 'react';
import {Link,Route,Switch,useRouteMatch} from 'react-router-dom';

import {getPosts} from "../../services";
import {IPost} from "../../interfaces";
import {Post} from "../../components";
import './posts.style.scss';

function Posts() {
    const [posts, setPosts] = useState<IPost[]>([]);
    let { path, url } = useRouteMatch();

    useEffect(() => {
        getPosts().then(({data}) => setPosts(data));
    }, [posts]);

    return (
        <ul className={'ul_wrap'}>
            {posts.map(post=>
                <li key={post.id}>
                <Link to={`${url}/${post.id.toString()}`}>{post.title}</Link>
                    <Switch>
                    <Route exact path={`${path}/${post.id.toString()}`}>
                        <Post title={post.title}
                              body={post.body}
                              userId = {post.userId}
                              id={post.id}
                              key={post.id}
                        />
                    </Route>
                    </Switch>
                </li>
            )}
        </ul>
    );
}

export {Posts};
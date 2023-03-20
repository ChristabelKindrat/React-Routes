import React, {FC} from 'react';

import {IPost} from "../../interfaces";

const Post: FC<IPost> = (post) => {
    const {body} = post;

    return (
        <div>
            <p>{body}</p>
        </div>
    );
}
export {Post};
import React, {FC} from 'react';

import {IUser} from "../../interfaces";

const User: FC<IUser> = (user) => {
    const {name,email,phone,company} = user;

    return (
        <div>
            <h2>{name}</h2>
            <div>{email}</div>
            <div>{phone}</div>
            <div>{company.name}</div>
        </div>
    );
}

export {User};
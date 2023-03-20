import React from 'react';
import {useForm} from 'react-hook-form';
import {useHistory} from "react-router-dom";

import './login.style.scss';

interface IUser {
    login: string,
    password: string
}

function Login() {
    const {register, handleSubmit, formState} = useForm<IUser>();
    let history = useHistory();

    const onSubmit = (newUser: IUser) => {
        localStorage.setItem('user', JSON.stringify(newUser));
        history.replace('/');
    }

    return (
        <div className={'form_wrap'}>
            <form onSubmit={handleSubmit(onSubmit)}
                  className={'form'}
            >
                <input type={'email'}
                       placeholder={'Login'}
                       {...register("login", {required: true})}/>
                <input type={'text'}
                       placeholder={'Password'}
                       {...register("password", {required: true})}/>
                <button type="submit"
                        disabled={formState.isSubmitting}
                >
                    Log In
                </button>

            </form>
        </div>
    );
}

export {Login};
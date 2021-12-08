import React, {useEffect, useReducer} from "react"
import { UserContext } from './userContext'
import {userReducer} from "./userReducer";
import axios from "axios";
import {GET_AUTH_USER} from "../types";

export const UserState = ({children}) => {

    const[state, dispatch] = useReducer(userReducer, null, (arg) => {
        return arg;
    });

    const getAuthUser = () => {
        axios.get('/user/authorized').then((response) => {
                dispatch({
                    type: GET_AUTH_USER,
                    payload: {
                        ...(response.data)
                    }
                })
            }
        )
    }

    useEffect(() => {
        if (!state) {
            getAuthUser()
        }
    })


    return (
        <UserContext.Provider value={{
            user: state,
            getAuthUser
        }}>
            {children}
        </UserContext.Provider>
    );
}

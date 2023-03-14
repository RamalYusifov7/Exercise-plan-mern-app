import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useLoginUserMutation } from "../features/users/userApi";
import { addUser } from "../features/users/userSlice";
export const useLogin = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginUser, { data: user, isLoading, error, isError, isSuccess }] = useLoginUserMutation();


    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser({ email, password });
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch(addUser(user))
            navigate("/")
        }
    }, [user])

    return {
        email,
        password,
        setEmail,
        setPassword,
        loginUser,
        user,
        isLoading,
        error,
        isError,
        handleSubmit
    };
};

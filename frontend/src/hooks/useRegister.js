import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../features/users/userApi";
import { addUser } from "../features/users/userSlice";

export const useRegister = () => {
    const dispatch = useDispatch()
     const navigate=useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerUser, object] = useRegisterUserMutation();
    const { data: user, isSuccess, error, isError } = object;

    const handleSubmit = async (e) => {
        e.preventDefault();
        registerUser({ email, password });
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
        registerUser,
        user,
        error,
        isError,
        handleSubmit,
    };
};

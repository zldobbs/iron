import { useState } from "react";
import postFetch from "../services/ApiService"

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = () => {
        const data = {
            username: username,
            password: password,
            confirmPassword: confirmPassword
        };
        postFetch('http://localhost:4000/test', data).then(
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    return (
        <>
            <h1>Register</h1>
            <label>
                Username
                <input
                    key='username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </label>
            <label>
                Password
                <input
                    key='password'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </label>
            <label>
                Confirm Password
                <input
                    key='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
            </label>

            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}
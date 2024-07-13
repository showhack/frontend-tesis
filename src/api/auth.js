import axios from "axios";

export async function login(username, password) {
    const res = await axios.post('http://127.0.0.1:8000/api/v1/auth/login/', {
        username,
        password,
    })
    return res
}

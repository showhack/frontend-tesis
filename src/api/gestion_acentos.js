import axios from "axios";

export async function list_acentos_cat() {
    const res = await axios.get('https://127.0.0.1:8000/api/v1/gestion-acentos/categoria/')
    return res
}

export async function add_acento_cat(nombre, categoria) {
    const res = await axios.post('https://127.0.0.1:8000/api/v1/gestion-acentos/categoria/', {
        nombre,
        categoria
    })
    return res
}

export async function update_acento_cat(id) {
    const res = await axios.get('https://127.0.0.1:8000/api/v1/gestion-acentos/categoria/{id}/', {
        id
    })
    return res
}
// export async function
// export async function
// export async function
// export async function
// export async function
// export async function
// export async function
// export async function
// export async function
import axios from "axios";

export async function crear_miembro(color_de_piel, grado_escolar, nuevo_ingreso, continuante, anno_exp_x_deporte, vive_con, padres_fallecidos, ocupacion_padre, ocupacion_madre, persona, direccion, grupo_etario) {
    const res = await axios.post('http://127.0.0.1:8000/api/v1/miembros/atleta/', {
        color_de_piel,
        grado_escolar,
        nuevo_ingreso,
        continuante,
        anno_exp_x_deporte,
        vive_con,
        padres_fallecidos,
        ocupacion_padre,
        ocupacion_madre,
        persona,
        direccion,
        grupo_etario,
    })
    return res
}
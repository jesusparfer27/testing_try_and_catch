 import { sections, appAdvantages, footer, comments } from '../data/mockdata.js'

 const responseAPI = {
    data: [],
    msg: "",
    status: "ok"
};

 export const getLanding = ( req , res, next ) => {
    try {
        const datos = {
            sections: sections,
            appAdvantages: appAdvantages,
            footer: footer,
            comments: comments
        }
        res.status(200).json(datos)
    } catch (error) {
        console.error('error al obtener los datos de mockdata', error)
        res.status(500).json({message: 'Error al obtener los datos'})
    } next(error)
}

 import { sections, appAdvantages, footer, comments } from '../data/mockdata.js'

 const responseAPI = {
    data: [],
    msg: "",
    status: "ok"
};

 export const getLanding = ( req , res ) => {

    
    const datos = {
        sections: sections,
        appAdvantages: appAdvantages,
        footer: footer,
        comments: comments
    }

    res.status(200).json(datos)
  
}

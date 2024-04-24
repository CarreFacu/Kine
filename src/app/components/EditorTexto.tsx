'use client'
import FroalaEditor from 'react-froala-wysiwyg'
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/plugins/image.min'
import {SetStateAction, useState} from "react";

export default function EditorTexto({texto} : { texto : String}) {
    const [model, setModel] = useState(texto);

    const handleModelChange = (event: SetStateAction<string>)=>{
        console.log(event);
        //setModel(event)
    }
    return(
        <FroalaEditor
            model={model}
            onModelChange={(e: string)=> handleModelChange(e)}
            config={{
                placeholder: 'Escriba aqui tu diagnostico o avance de la consulta',
                // toolbarButtons:{
                //     moreText:{
                //         buttons:['bold','italic','underline','strikeThrough'],
                //     },
                //     moreParagraph:{
                //         buttons: ['alongLeft', 'alongRight']
                //     },
                //     moreRich:{
                //         buttons:['insertHR']
                //     }
                // }
            }}
            tag="textarea" // Utiliza un textarea como base
        />
    )
}
'use client'
import FroalaEditor from 'react-froala-wysiwyg'
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/plugins/image.min'
import {SetStateAction, useState} from "react";

export default function EditorTexto({texto, readOnly=false} : { texto? : String, readOnly? : boolean}) {
    const [model, setModel] = useState(texto);

    const handleModelChange = (event: string)=>{
        console.log(event);
        setModel(event)
    }
    return (
            <FroalaEditor
                model={model}
                onModelChange={(e: string)=> handleModelChange(e)}
                config={{
                    toolbarInline: readOnly,
                    toolbarSticky: false,
                    charCounterCount: false,
                    placeholderText: 'Escriba historia clinica aqui',
                }}
                tag="textarea" // Utiliza un textarea como base
            />
    )
}
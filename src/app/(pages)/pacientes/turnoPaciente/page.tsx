'use client'
import {Typography} from "@mui/material";
import EditorTexto from '@/src/app/components/EditorTexto'
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import FroalaEditor from 'react-froala-wysiwyg';
import {useEffect, useRef} from "react";
export default function TunoPaciente(){
    return(
        <main>
            <Typography variant="h1"> esta es pa pagina para atender al cliente </Typography>
            <EditorTexto/>
        </main>

    )
}
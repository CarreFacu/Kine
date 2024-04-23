'use client'
import {Typography} from "@mui/material";
import EditorTexto from '@/src/app/components/EditorTexto'
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import FroalaEditor from 'react-froala-wysiwyg';
import React, {useEffect, useRef} from "react";
import Title from "@/src/app/components/Title";
import ModalHistoriaClinica from "@/src/app/components/ModalHistoriaClinica";
import {HistoriaClinica, Turnos} from "@/src/app/utils/interfaces";
import {hitoriaClinica} from "@/src/app/utils/DB";
import {CheckBadgeIcon, PhoneIcon, XMarkIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
export default function TunoPaciente(){
    return(
        <main>
            <div className="mb-10">
                <Title title="Historia clinica del paciente: Cosme fulanito" />
            </div>

            <div>
                <EditorTexto/>
            </div>
            <div className="flex gap-3 mt-5">
                {hitoriaClinica.map((historiaClinica: HistoriaClinica, index: number) => (
                    <ModalHistoriaClinica historiaClinica={historiaClinica}/>
                ))}

            </div>
        </main>



    )
}
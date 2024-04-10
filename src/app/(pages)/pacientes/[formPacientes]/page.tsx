
"use client"
import { PacienteForm } from '@/src/app/components/PacienteForm';
import { Pacientes } from '@/src/app/utils/interfaces';
import Title from "@/src/app/components/Title";
import React from "react";
import Breadcrumbs from "@/src/app/components/BreadCrumbs";

export default function FormPaciente ({params} : {params: {formPacientes: string}})  {
  const { formPacientes } = params;
console.log('no se llamo a esta pagina ?', formPacientes)
  const handleForm = (paciente: Pacientes) => {
    // Lógica para actualizar un usuario existente (por ejemplo, enviar a la API)
    console.log('Actualizando usuario:', paciente);
  };

  if (formPacientes === "new") {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Paciente', href: '/pacientes' },
                    {
                        label: 'Crear paciente',
                        href: '/pacientes/new',
                        active: true,
                    },
                ]}
            />
            <PacienteForm onSubmit={handleForm}/>
        </main>
)
        ;
  } else {
    // Aquí puedes cargar los datos del usuario según el id de la API
    const paciente = {
        nombre: 'test1',
        apellido: 'test1',
        email: 'test1@io.dev',
        genero: 'masculino',
        fechaNacimiento: '1990-03-25',
    };
    return (
        <main>
            <Title title="Actualizar paciente" />
            <PacienteForm onSubmit={handleForm} pacienteData={paciente}/>
        </main>
    );
  }
};
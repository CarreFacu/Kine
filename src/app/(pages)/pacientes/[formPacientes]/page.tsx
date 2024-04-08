
"use client"
import { PacienteForm } from '@/src/app/components/PacienteForm';
import { Pacientes } from '@/src/app/utils/interfaces';

export default function FormPaciente ({params} : {params: {formPacientes: string}})  {
  const { formPacientes } = params;
console.log('no se llamo a esta pagina ?', formPacientes)
  const handleForm = (paciente: Pacientes) => {
    // Lógica para actualizar un usuario existente (por ejemplo, enviar a la API)
    console.log('Actualizando usuario:', paciente);
  };
  // Si no hay un id, es una creación, de lo contrario, es una edición
  if (formPacientes === "new") {
    return <PacienteForm onSubmit={handleForm}/>;
  } else {
    // Aquí puedes cargar los datos del usuario según el id de la API
    const paciente = {
        nombre: 'test1',
        apellido: 'test1',
        email: 'test1@io.dev',
        genero: 'masculino',
        fechaNacimiento: '1990-03-25',
    };
    return <PacienteForm onSubmit={handleForm} pacienteData={paciente}/>;
  }
};
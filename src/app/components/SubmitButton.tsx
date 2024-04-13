import { useFormStatus } from 'react-dom';
import { Button } from './Button';
import { CogIcon } from '@heroicons/react/24/outline';

export function SubmitButton() {
    const { pending, data } = useFormStatus();

    return (
        <>
            <div>
                <Button type="submit" aria-disabled={pending}>
                    {pending ? 'Enviando...' : 'Enviar'}
                </Button>
            </div>

            <div className="mt-2 flex text-greenCustom-600">
                {data && (
                    <>
                        <CogIcon className="mr-1 h-5 w-5 " aria-hidden="true" />{' '}
                        <p className="mb-2 text-greenCustom-600">Creando Periodo...</p>
                    </>
                )}
            </div>
        </>
    );
}
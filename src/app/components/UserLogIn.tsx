
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { UserData } from '@/src/app/utils/interfaces'
import Image from 'next/image';

export default function UserLogIn({ name, image }: UserData) {
    return (
        <div className="flex h-full items-center bg-white px-3 py-4 md:px-2">
            {image ? (
                <Image className="mr-6 h-12 w-12" src={image} alt="" />
            ) : (
                <UserCircleIcon className="mr-6 h-12 w-12 text-greenCustom-600" />
            )}
            <div className="text-sm">
                <p>{name}</p>
            </div>
        </div>
    );
}
import Image from 'next/image';

export default function Logo() {
    return (
        <div>
            <Image
                src="/logoKineJpg.png"
                width={150}
                height={55}
                alt="Logo"
                priority
            />
        </div>
    );
}
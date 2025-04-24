import { ButtonRegister } from '@/components/button-register';
import { ButtonSignIn } from '@/components/button-sigin';
import Image from 'next/image';
import Link from 'next/link';
import logoCta from '../../../../public/homeNoAuth/logoCta.png'
import logoOBF from '../../../../public/logoOnebitflix.svg'
import styles from './styles.module.scss';

export const HeaderNoAuth = () => {
    return (
        <>
            <div className={styles.ctaSection}>
                <Image src={logoCta} alt="logoCta" className={styles.imgCta}/>
                <p>Se cadastre para ter acesso aos cursos</p>
                <Image src={logoCta} alt="logoCta" className={styles.imgCta}/> 
            </div>
            <div className='flex flex-row flex-wrap justify-between items-center w-full max-w-6xl'>
                <div className='flex flex-wrap justify-start'>
                    <Image src={logoOBF} alt='Logo da escola'/>
                </div>
                <div className='flex flex-wrap justify-end h-12 gap-4'>
                    <Link href='/auth/login'>
                        <ButtonSignIn />
                    </Link>
                    <Link href='/auth/register'>
                        <ButtonRegister />
                    </Link>
                </div>
            </div>
        </>
    )
}
import { ButtonRegister } from '@/components/button-register';
import { ButtonSignIn } from '@/components/button-sigin';
import Image from 'next/image';
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
            <div className='flex flex-row justify-between items-center w-full max-w-6xl'>
                <div className='flex'>
                    <Image src={logoOBF} alt='Logo da escola'/>
                </div>
                <div className='flex justify-end h-12 gap-4'>
                    <ButtonSignIn />
                    <ButtonRegister />
                </div>
            </div>
        </>
    )
}
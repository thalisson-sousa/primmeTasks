import { useState } from 'react';

import { useForm } from 'react-hook-form';

import styles from './cadUsuario.module.css';

export default function CadUsuario() {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const modal = document.querySelector("#modal");

    const [ open, setOpen ] = useState(false);

    if(open === true) {
        modal.showModal();
    }

    return (
        <section className={styles.Container}>
            <header className={styles.head}>
                <button className={styles.btn} onClick={() => setOpen(true)} >Cadastrar</button>
            </header>
            <div>
                <dialog id='modal' className={styles.Container}>
                    <form className={styles.containerForm} onSubmit={handleSubmit((data) => console.log(data))}>
                        <div className={styles.inputForm}>
                            <label>Nome</label>
                            <input type='text' {...register('nome', { required: true })} />
                            {errors.nome && <p className={styles.erro}>Informe o seu nome</p>}
                        </div>

                        <div className={styles.inputForm}>
                            <label>E-mail</label>
                            <input type='email' {...register('email', { required: true })} />
                            {errors.email && <p className={styles.erro}>Informe seu email</p>}
                        </div>

                        <div className={styles.inputForm}>
                            <label>Password</label>
                            <input type='password' {...register('password', { required: true })} />
                            {errors.password && <p className={styles.erro}>Informe uma senha</p>}
                        </div>

                        <input className={styles.btn} type='submit' />

                    </form>
                </dialog>
            </div>
        </section>
    )
}
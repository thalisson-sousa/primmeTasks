import { useForm } from 'react-hook-form';

import styles from './TaskForm.module.css';

export default function TaskForm() {
    const { register, handleSubmit, formState: {errors} } = useForm();

    return (
        <form className={styles.Container} onSubmit={handleSubmit((data) => console.log(data))}>
            <div className={`${styles.inputForm} ${styles.nivel}`}>
                <label>Nivel:</label>
                <select {...register('nivel')}>
                    <option value="N1" selected>N1</option>
                    <option value="N2">N2</option>
                    <option value="N3">N3</option>
                </select>
            </div>

            <div className={`${styles.inputForm} ${styles.dual}`}>
                <div className={styles.composer}>
                    <label>Protocolo:</label>
                    <input {...register('protocolo')} />
                </div>

                <div className={styles.composer}>
                    <label>Designacão:</label>
                    <input {...register('designacao')} />
                </div>

                <div className={styles.composer}>
                    <label>Previsão:</label>
                    <input {...register('previsao')} />
                </div>
            </div>

            <div className={`${styles.inputForm} ${styles.dual}`}>
                <div className={styles.composer}>
                    <label>Atendimento:</label>
                    <input {...register('atendimento')} />
                </div>

                <div className={styles.composer}>
                    <label>Empresa:</label>
                    <input {...register('empresa')} />
                </div>

            </div>

            <div className={`${styles.inputForm} ${styles.generic}`}>
                <label>Filial:</label>
                <input {...register('filial', { required: true })} />
                {errors.filial && <p>Informe a Filial</p>}
            </div>

            <div className={`${styles.inputForm} ${styles.generic}`}>
                <label>Sintomas:</label>
                <input {...register('sintomas')} />
            </div>

            <div className={`${styles.inputForm} ${styles.generic}`}>
                <label>Motivo:</label>
                <input {...register('motivo')} />
            </div>
            <input className={styles.formSubmit} type='submit' />
        </form>
    );
}
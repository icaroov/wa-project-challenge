import SearchInput from '../SearchInput'

import styles from './styles.module.css'

const ListUsers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <section className={styles.header}>
          <h1>Bem vindo(a) <span className={styles.wave}>👋</span></h1>
          <p>Pesquise por nossa incrível base de dados</p>
        </section>

        <SearchInput />

        <section className={styles.list}>
          <div className={styles['list-wrapper']}>
            <span>icaro@gmail.com</span>
            <span>Icaro Oliveira</span>
          </div>

          <div className={styles['list-wrapper']}>
            <span>icaro@gmail.com</span>
            <span>Icaro Oliveira</span>
          </div>

          <div className={styles['list-wrapper']}>
            <span>icaro@gmail.com</span>
            <span>Icaro Oliveira</span>
          </div>

          <div className={styles['list-wrapper']}>
            <span>icaro@gmail.com</span>
            <span>Icaro Oliveira</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ListUsers

import styles from './styles.module.css'

const SearchInput = () => {
  return (
    <section className={styles.search}>
      <div className={styles['search-inner']}>
        <button className={styles['search-button']}>
          <i>+</i>
        </button>

        <input
          type='text'
          className={styles['search-input']}
          placeholder='Pesquisar...'
        />
      </div>
    </section>
  )
}

export default SearchInput

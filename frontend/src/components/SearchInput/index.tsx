import styles from './styles.module.css'

type SearchInputProps = {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ onChange, placeholder }: SearchInputProps) => {
  return (
    <section className={styles.search}>
      <div className={styles['search-inner']}>
        <button className={styles['search-button']}>+</button>

        <input
          type='text'
          className={styles['search-input']}
          placeholder={placeholder}
          onChange={onChange}
          autoFocus
        />
      </div>
    </section>
  )
}

export default SearchInput

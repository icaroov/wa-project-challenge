const ListUsers = () => {
  return (
    <div className='container'>
      <div className='box'>
        <section className='header'>
          <h1>Bem vindo(a)</h1>
          <p>Pesquise por nossa incrível base de dados</p>
        </section>

        <section className='search'>
          <div className='search-inner'>
            <button className='search-button'>
              <i className='ai-search'>+</i>
            </button>
            <input
              type='text'
              className='search-input'
              placeholder='Pesquisar...'
            />
          </div>
        </section>

        <section className='list'>
          <h4>Users</h4>
        </section>
      </div>
    </div>
  )
}

export default ListUsers

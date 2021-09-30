import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import { GET_ALL_STUDENTS } from '../../graphql/queries/getStudents.query'
import SearchInput from '../SearchInput'
import styles from './styles.module.css'

type IStudentQuery = {
  getAllStudents: {
    id: string
    name: string
    email: string
    cpf: number
  }[]
}

type IStudent = {
  id: string
  name: string
  email: string
  cpf: number
}

const ListUsers = () => {
  const { data, loading, error } = useQuery<IStudentQuery>(GET_ALL_STUDENTS)

  const [filteredData, setFilteredData] = useState<IStudent[]>([])

  useEffect(() => {
    if (data) setFilteredData(data.getAllStudents)
  }, [data])

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value

    const newFilter = data?.getAllStudents?.filter((student) => {
      return (
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.cpf.toString().includes(searchTerm)
      )
    })

    if (newFilter) setFilteredData(newFilter)
  }

  if (error)
    return <h1 className='error'>Ops... Infelizmente algo deu errado. 😕</h1>

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <section className={styles.header}>
          <h1>
            Bem vindo(a) <span className={styles.wave}>👋</span>
          </h1>
          <p>Pesquise por nossa incrível base de dados</p>
        </section>

        <SearchInput
          onChange={(e) => handleSearch(e)}
          placeholder='Pesquisar...'
        />

        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <section className={styles.list}>
            {filteredData?.slice(0, 10).map((value) => (
              <div key={value.id} className={styles['list-wrapper']}>
                <span>{value.email}</span>
                <span>Nome: {value.name}</span>
                <span>CPF: {value.cpf}</span>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  )
}

export default ListUsers

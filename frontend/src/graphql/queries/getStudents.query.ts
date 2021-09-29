import { gql } from '@apollo/client'

export const GET_ALL_STUDENTS = gql`
  query {
    getAllStudents {
      id
      name
      email
      cpf
    }
  }
`

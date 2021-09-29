import { gql } from '@apollo/client'

export const GET_STUDENT_BY_EMAIL = gql`
  query {
    getStudentByEmail(email: $String!) {
      id
      name
      cpf
    }
  }
`

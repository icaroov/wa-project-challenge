import { Query, Resolver } from '@nestjs/graphql'

import { Student } from './entities/student.entity'
import { StudentService } from './student.service'

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => [Student], { name: 'getAllStudents' })
  public findAll() {
    return this.studentService.findAll()
  }
}

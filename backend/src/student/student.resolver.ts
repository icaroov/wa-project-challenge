import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CreateStudentDTO } from './dto/create-student.dto'
import { Student } from './entities/student.entity'
import { StudentService } from './student.service'

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => [Student], { name: 'getAllStudents' })
  public findAll() {
    return this.studentService.findAll()
  }

  @Mutation(() => Student, { name: 'createStudent' })
  public create(@Args('student') student: CreateStudentDTO) {
    return this.studentService.create(student)
  }
}

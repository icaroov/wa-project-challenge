import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CreateStudentDTO } from './dto/create-student.dto'
import { Student } from './entities/student.entity'
import { StudentService } from './student.service'

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation(() => Student, { name: 'createStudent' })
  public create(@Args('student') student: CreateStudentDTO) {
    return this.studentService.create(student)
  }

  @Query(() => [Student], { name: 'getAllStudents' })
  public findAll() {
    return this.studentService.findAll()
  }

  @Query(() => Student, { name: 'getStudentById' })
  public findById(@Args('id') id: string) {
    return this.studentService.findById(id)
  }

  @Query(() => Student, { name: 'getStudentByEmail' })
  public findByEmail(@Args('email') email: string) {
    return this.studentService.findByEmail(email)
  }

  @Query(() => Student, { name: 'getStudentByName' })
  public findByName(@Args('name') name: string) {
    return this.studentService.findByName(name)
  }

  @Query(() => Student, { name: 'getStudentByCpf' })
  public findByCpf(@Args('cpf') cpf: number) {
    return this.studentService.findByCpf(cpf)
  }
}

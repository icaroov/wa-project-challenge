import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateStudentDTO } from './dto/create-student.dto'
import { Student } from './entities/student.entity'

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  public findAll(): Promise<Student[]> {
    return this.studentRepository.find()
  }

  public create(student: CreateStudentDTO): Promise<Student> {
    return this.studentRepository.save(student)
  }
}

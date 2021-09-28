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

  public create(student: CreateStudentDTO): Promise<Student> {
    return this.studentRepository.save(student)
  }

  public findAll(): Promise<Student[]> {
    return this.studentRepository.find()
  }

  public findById(id: string): Promise<Student> {
    return this.studentRepository.findOne(id)
  }

  public findByEmail(email: string): Promise<Student> {
    return this.studentRepository.findOne({ email })
  }

  public findByName(name: string): Promise<Student> {
    return this.studentRepository.findOne({ name })
  }

  public findByCpf(cpf: number): Promise<Student> {
    return this.studentRepository.findOne({ cpf })
  }
}

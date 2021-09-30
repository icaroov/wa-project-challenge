import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IsEmail, IsInt, Min, Max, IsNotEmpty } from 'class-validator'

@ObjectType()
@Entity()
export class Student {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  @IsNotEmpty()
  name: string

  @Field(() => Int)
  @Column()
  @IsInt()
  @Min(11)
  @Max(11)
  @IsNotEmpty()
  cpf: number

  @Field()
  @Column()
  @IsEmail()
  email: string
}

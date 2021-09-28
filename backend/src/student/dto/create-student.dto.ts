import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateStudentDTO {
  @Field()
  name: string

  @Field(() => Int)
  cpf: number

  @Field()
  email: string
}

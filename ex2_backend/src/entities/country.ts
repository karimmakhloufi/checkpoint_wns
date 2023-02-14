import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity()
class Country {
  @PrimaryColumn()
  @Field(() => ID)
  code: string;

  @Column()
  @Field()
  name: string;
}

export default Country;

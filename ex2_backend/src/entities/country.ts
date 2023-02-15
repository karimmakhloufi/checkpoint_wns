import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity()
class Country {
  @PrimaryColumn({ unique: true })
  @Field(() => ID)
  code: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  emoji: string;
}

export default Country;

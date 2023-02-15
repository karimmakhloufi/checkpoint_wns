import { Arg, Mutation, Query, Resolver } from "type-graphql";
import dataSource from "../dataSource";
import Country from "../entities/country";

@Resolver(Country)
class CountryResolver {
  @Query(() => [Country])
  async countries() {
    return await dataSource.getRepository(Country).find();
  }

  @Query(() => Country)
  async country(@Arg("code") code: string) {
    return await dataSource.getRepository(Country).findOneByOrFail({ code });
  }

  @Mutation(() => Country)
  async addCountry(
    @Arg("name") name: string,
    @Arg("code") code: string,
    @Arg("emoji") emoji: string
  ) {
    const newCountry = new Country();
    newCountry.code = code;
    newCountry.name = name;
    newCountry.emoji = emoji;
    try {
      const countryFromDB = await dataSource
        .getRepository(Country)
        .save(newCountry);
      console.log("saved country", countryFromDB);
      return countryFromDB;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
export default CountryResolver;

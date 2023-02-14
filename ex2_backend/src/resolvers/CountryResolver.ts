import { Arg, Mutation, Query, Resolver } from "type-graphql";
import dataSource from "../dataSource";
import Country from "../entities/country";

@Resolver(Country)
class CountryResolver {
  @Query(() => [Country])
  async countries() {
    return await dataSource.getRepository(Country).find();
  }

  @Mutation(() => Country)
  async addCountry(@Arg("name") name: string, @Arg("code") code: string) {
    const newCountry = new Country();
    newCountry.code = code;
    newCountry.name = name;
    const countryFromDB = await dataSource
      .getRepository(Country)
      .save(newCountry);
    console.log("saved country", countryFromDB);
    return countryFromDB;
  }
}
export default CountryResolver;

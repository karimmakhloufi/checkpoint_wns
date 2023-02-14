import { DataSource } from "typeorm";
import Country from "./entities/country";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./countriesdb.sqlite",
  synchronize: true,
  entities: [Country],
});

export default dataSource;

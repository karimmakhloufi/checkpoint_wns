import { ApolloError, ApolloServer } from "apollo-server";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import dataSource from "./dataSource";
import CountryResolver from "./resolvers/CountryResolver";

const start = async () => {
  await dataSource.initialize();
  const schema = await buildSchema({ resolvers: [CountryResolver] });
  const server = new ApolloServer({ schema });
  try {
    const { url } = await server.listen();
    console.log(`🚀  Server ready at ${url}`);
  } catch (err) {
    console.log("Error starting the server");
  }
};

start();

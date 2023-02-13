import { useQuery, gql } from "@apollo/client";
import "./App.css";
import CountrySelector from "./CountrySelector";

const GET_COUNTRY = gql`
  query GetCountries {
    countries {
      code
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_COUNTRY);
  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    console.log("error", error);
    return <p>Error</p>;
  } else {
    console.log("data", data);
    return <CountrySelector codes={data.countries} />;
  }
}

export default App;

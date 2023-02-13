import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Country from "./Country";

const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      name
      emoji
    }
  }
`;

const CountrySelect = ({ codes }: { codes: [{ code: string }] }) => {
  const [currentCode, setCurrentCode] = useState(0);
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code: codes[currentCode].code },
  });
  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Error</p>;
  } else {
    return (
      <div style={{ textAlign: "center" }}>
        <Country name={data.country.name} emoji={data.country.emoji} />
        <button
          onClick={() => {
            setCurrentCode(currentCode - 1);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setCurrentCode(currentCode + 1);
          }}
        >
          Next
        </button>
      </div>
    );
  }
};

export default CountrySelect;

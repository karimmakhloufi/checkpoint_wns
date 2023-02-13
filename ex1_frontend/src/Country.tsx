const Country = ({ name, emoji }: { name: string; emoji: string }) => (
  <>
    <h1>{name}</h1>
    <p style={{ fontSize: "200px" }}>{emoji}</p>
  </>
);

export default Country;

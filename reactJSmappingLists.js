// example of how to use .map() to create lists

function Home() {
  return (
    <tbody>
      {cityData.map(city => (
        <tr key={city.name}>
          <td>{city.name}</td>
          <td>{city.population}</td>
          <td>{city.region}</td>
        </tr>
      ))}
    </tbody>
  );
}

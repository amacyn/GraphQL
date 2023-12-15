import { useQuery } from '@apollo/client';
import client from '../apollo-client';
import { LOCATIONS_QUERY } from '../graphql/LocationsQuery';

const LocationsPage = () => {
  const { loading, error, data } = useQuery(LOCATIONS_QUERY, { client });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h1> Locations</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PARENT_SLUG</th>
            <th>SLUG</th>
          </tr>
        </thead>
        <tbody>
          {data.Locations.map((Locations) => (
            <tr key={Locations.id}>
              <td>{Locations.id}</td>
              <td>{Locations.name}</td>
              <td>{Locations.parent_slug}</td>
              <td>{Locations.slug}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocationsPage;

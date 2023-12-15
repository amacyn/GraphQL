import { useQuery } from '@apollo/client';
import client from '../apollo-client';
import { SERVICE_QUERY } from '../graphql/ServiceQuery';

const ServicePage = () => {
  const { loading, error, data } = useQuery(SERVICE_QUERY, { client });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h1>Service</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>SLUG</th>
          </tr>
        </thead>
        <tbody>
          {data.getServices.map((getServices) => (
            <tr key={getServices.id}>
              <td>{getServices.id}</td>
              <td>{getServices.name}</td>
              <td>{getServices.slug}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicePage;

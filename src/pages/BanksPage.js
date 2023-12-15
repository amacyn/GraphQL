import { useQuery } from '@apollo/client';
import client from '../../apollo-client';
import { BANKS_QUERY } from '../graphql/banksQuery';

const BanksPage = () => {
  const { loading, error, data } = useQuery(BANKS_QUERY, { client });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h1>Banks</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          {data.banks.map((bank) => (
            <tr key={bank.id}>
               <td>{bank.id}</td>
               <td>{bank.name}</td>
              <td>{bank.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BanksPage;

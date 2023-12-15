import { gql } from '@apollo/client';

export const BANKS_QUERY = gql`
  query getBanks {
    getBanks:{
      code
      id
      name
    }
  }   
 `;

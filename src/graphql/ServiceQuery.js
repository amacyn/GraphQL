import { gql } from '@apollo/client';

export const SERVICES_QUERY = gql`
query  getServices {
    getServices: {
     id
     name
     slug
  }
}  
`;
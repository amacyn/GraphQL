import { gql } from '@apollo/client';

export const LOCATIONS_QUERY = gql`
query  getLocationAreas {
  getLocationAreas:{
    id
    name
    parent_slug
    slug
  }
}  
`;

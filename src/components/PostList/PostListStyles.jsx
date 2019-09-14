import styled from 'styled-components';

export const PostsContainer = styled.div`
   max-width: 800px;
   width: 100%;
   border: 5px solid #bdc3c7;
   padding: 10px;

   @media screen and (min-width: 600px) {
    border: 10px solid #bdc3c7;
  }

  @media screen and (min-width: 800){
      width: 800px;
      margin: 10px auto;
      border: 20px solid #bdc3c7;
      padding: 20px;
  }

  @media screen and (min-width: 960px) {
    margin: 20px auto;
   border: 20px solid #bdc3c7;
   
  }
`;


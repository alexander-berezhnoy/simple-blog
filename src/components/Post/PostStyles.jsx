import styled from 'styled-components';

export const PostContainer = styled.div`
    padding-bottom: 10px;
    max-width: 800px;
    margin: 0 auto;
`;

export const PostDate = styled.p`
    color: #3498db;
    letter-spacing: 2px;
    text-transform: uppercase;
`;

export const PostTitle = styled.h2`
   color: #2c3e50;
   text-transform: capitalize;
   font-size: 2em;
`;

export const PostAuthor = styled.p`
   border-left: 5px solid #bdc3c7;
   padding-left: 4px;
`;

export const PostDivider = styled.hr`
    height: 0px;
    border: 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
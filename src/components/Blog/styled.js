import styled from 'styled-components';

// Tworzymy komponent artykułu
export const Article = styled.article`
  border: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 20px;
`;

// Tworzymy komponent obrazka
export const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

// Tworzymy komponent formularza do dodawania artykułu
export const AddArticleForm = styled.form`
  margin-bottom: 20px;
`;
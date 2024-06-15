import React from 'react';
import { BlogContainer, Logo, Title } from "./styled";
import Article from '../Article';
import logo from '../../Images/logo2.png';


const Blog = () => {
  return (
    <BlogContainer>
      <Logo src={logo} alt="Logo" />
      <Title>Lokalny Bazarek</Title>

      <Article />
    </BlogContainer>
  );
};

export default Blog;

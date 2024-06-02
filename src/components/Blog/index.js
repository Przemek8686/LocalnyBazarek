import React from 'react';
import {BlogContainer,Logo, Title, Subtitle} from "./styled";
import Article from '../Article';
import logo from '../../Images/logo2.png';


const Blog = () => {
  return (
    <BlogContainer>
      <Logo src={logo} alt="Logo" />
      <Title>Lokalny Bazarek</Title>
      <Subtitle>Powiat słupecki</Subtitle>
      <Article />
    </BlogContainer>
  );
};

export default Blog;

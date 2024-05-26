import React from 'react';
import {BlogContainer,Logo} from "./styled";
import Article from '../Article';
import logo from '../../Images/logo2.png';


const Blog = () => {
  return (
    <BlogContainer>
      <Logo src={logo} alt="Logo" />
      <Article />
    </BlogContainer>
  );
};

export default Blog;

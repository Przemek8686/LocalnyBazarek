
import React, { useState } from 'react';
import { db, storage } from '../FirebaseConfig';
import {AddArticleForm,Article,Image} from "./styled"


const Blog = () => {
  return (
      <div>
        <AddArticleForm onSubmit={handleAddArticle}>
          <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <br />
          <label>
            Content:
            <textarea value={content} onChange={(e) => setContent(e.target.value)} />
          </label>
          <br />
          <label>
            Image:
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
          <br />
          <button type="submit">Add Article</button>
        </AddArticleForm>
        {articles.map((article) => (
          <Article key={article.id}>
            <h2>{article.title}</h2>
            <Image src={article.imageUrl} alt={article.title} />
            <p>{article.content}</p>
          </Article>
        ))}
      </div>
    );
  };
  
  export default Blog;
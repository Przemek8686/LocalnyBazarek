
import React, { useState } from 'react';
import { db, storage } from '../FirebaseConfig';
import {AddArticleForm,Article,Image} from "./styled"


const Blog = () => {
    const [articles, setArticles] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
  
    const handleAddArticle = async (e) => {
      e.preventDefault();
  
      if (!image) {
        console.log('No image selected');
        return;
      }
  
      // Przesyłanie obrazka do Firebase Storage
      const imageRef = storage.ref().child(image.name); // Poprawka tutaj
      await imageRef.put(image);
      const imageUrl = await imageRef.getDownloadURL();
  
      // Dodawanie artykułu do Firestore
      await db.collection('articles').add({
        title: title,
        content: content,
        imageUrl: imageUrl,
      });
  
      // Pobieranie aktualnej listy artykułów
      const articlesSnapshot = await db.collection('articles').get();
      const updatedArticles = articlesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setArticles(updatedArticles);
  
      // Czyszczenie pól formularza
      setTitle('');
      setContent('');
      setImage(null);
    };
  
    const handleImageChange = (e) => {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
    };
  
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
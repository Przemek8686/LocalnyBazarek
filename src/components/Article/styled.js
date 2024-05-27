import styled from "styled-components";

export const ArticleContainer = styled.div`
  width: 80%;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 15px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 480px) {
    width: 95%;
    padding: 10px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    padding: 8px;
    margin-bottom: 8px;
  }
`;

export const ArticleContent = styled.p`
  font-size: 16px;
  color: #333;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }

  @media screen and (max-width: 400px) {
    font-size: 13px;
  }
`;

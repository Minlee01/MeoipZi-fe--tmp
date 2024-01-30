import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../components/list/PostList";
import Button from "../components/ui/Button";
import data_F from '../data_Free.json';

interface MainPageProps {}

const FWrapper = styled.div`
  padding: 16px;
  width: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;  // Fixed typo in 'align-items'
  justify-content: center;
  
  margin-bottom: 8vh;
`;

const Container = styled.div`
  width: 100%;
  max-width: 355px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const FreeCom: FC<MainPageProps> = () => {
  const navigate = useNavigate();

  return (
    <FWrapper>
      <Container>
        <PostList
          posts={data_F}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
        />
      </Container>
    </FWrapper>
  );
};

export default FreeCom;
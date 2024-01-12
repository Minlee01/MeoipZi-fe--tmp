import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../components/list/PostList";
import Button from "../components/ui/Button";
import data from '../data.json';

interface MainPageProps {}

const Wrapper = styled.div`
  padding: 16px;
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;  // Fixed typo in 'align-items'
  justify-content: center;
  
  margin-bottom: 56px;
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

const ShopCom: FC<MainPageProps> = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <PostList
          posts={data}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
        />
      </Container>
    </Wrapper>
  );
};

export default ShopCom;
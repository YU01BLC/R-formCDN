import React from 'react';
import styled from 'styled-components';

const NoMatch = () => {
  return (
    <Wrapper>
      <Head>404 not found!!!!!</Head>
      <Image src="image/sorry.png" />
    </Wrapper>
  );
};

export default NoMatch;

const Wrapper = styled.div`
  text-align: center;
`;

const Head = styled.div`
  padding-top: 60px;
  font-size: 80px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Image = styled.img`
  height: 500px;
  width: 500px;
  @media (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
`;

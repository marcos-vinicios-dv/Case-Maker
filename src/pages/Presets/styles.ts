import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--gray-50);
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 1.15rem;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 2.15rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.6rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const ContentBox = styled.div`
  width: 100%;

  margin-top: 4rem;

  display: flex;
`;

export const ListaDeProdutos = styled.ul`
  list-style: none;
`;
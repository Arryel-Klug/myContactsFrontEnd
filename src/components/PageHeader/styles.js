import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 24px;

  a{
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary.main};

    span{
      text-decoration: none;
      font-weight: bold;
    }

    img{
      margin-right: 8px;
      transform: rotate(-90deg);
    }

  }
  h1{
    font-size: 24px;

  }
`;

import styled from 'styled-components';
import { shade, tint } from 'polished';

export const Back = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.4, '#a8a8b3')};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.div`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  div {
    margin-left: 24px;

    strong {
      font-size: 36px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #737380;
      margin-top: 4px;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
        font-weight: bold;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    padding: 24px;
    display: block;
    width: 100%;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: 0.2s;

    & + a {
      margin-top: 10px;
    }

    &:hover {
      transform: translateX(15px);
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 16px;
        color: ${tint(0.2, '#3d3d4d')};
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: ${tint(0.2, '#3d3d4d')};

      &.delete:hover {
        color: red;
      }

      &.details:hover {
        color: #3d3d4d;
      }
    }
  }
`;

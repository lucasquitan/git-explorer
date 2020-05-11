import styled, { css } from 'styled-components';
import { shade, tint } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #fff;
    border-radius: 5px 0 0 5px;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
        border-right: 0;
      `}

    &::placeholder {
      color: ${shade(0.2, '#3d3d4d')};
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &::placeholder {
      color: #a8a8b3;
    }

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin: 8px 0 0 2px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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

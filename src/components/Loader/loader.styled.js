import styled, { keyframes } from 'styled-components';

export const animate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

`;

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
  opacity: 1;
  transition: 0.8s opacity;
  z-index: 1000;
`;

export const LoaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ${animate};
  animation-duration: 0.9s;
  animation-iteration-count: linear infinite;
`;

export const LoaderBox = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.round};
  @media screen and (max-width: 500px) {
    width: 70px;
    height: 70px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to top, transparent, rgba(63, 81, 181, 2));
    background-size: 100px 180px;
    background-repeat: no-repeat;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    @media screen and (max-width: 500px) {
      width: 10px;
      height: 10px;
    }
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary},
      0 0 20px ${({ theme }) => theme.colors.primary},
      0 0 30px ${({ theme }) => theme.colors.primary},
      0 0 40px ${({ theme }) => theme.colors.primary},
      0 0 50px ${({ theme }) => theme.colors.primary},
      0 0 60px ${({ theme }) => theme.colors.primary},
      0 0 70px ${({ theme }) => theme.colors.primary},
      0 0 80px ${({ theme }) => theme.colors.primary},
      0 0 90px ${({ theme }) => theme.colors.primary},
      0 0 100px ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    z-index: 15;
  }
`;

export const LoaderBoxElem = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  bottom: 10px;
  left: 10px;
  @media screen and (max-width: 500px) {
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
  }
  border-radius: ${({ theme }) => theme.radii.round};
  background-color: ${({ theme }) => theme.colors.third};
`;

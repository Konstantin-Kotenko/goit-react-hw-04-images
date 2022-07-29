import {
  LoaderWrapper,
  LoaderContainer,
  LoaderBox,
  LoaderBoxElem,
} from './loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderContainer>
        <LoaderBox>
          <LoaderBoxElem></LoaderBoxElem>
        </LoaderBox>
      </LoaderContainer>
    </LoaderWrapper>
  );
};

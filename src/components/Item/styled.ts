import {Link} from "react-router-dom";
import styled from 'styled-components';

export const StyledName = styled.h3`
  font-weight: bold;
`

export const StyledImage = styled.img`
  width: 30px;
  height: 30px;
`

StyledImage.defaultProps = {
  src: '/src/assets/box.png',
};

export const StyledDescription = styled.p`
  font-size: 14px;
`

export const StyledItemLink = styled(Link)`
  display: flex;
  flex-grow: 1;
`

export const StyledImageContainer = styled.div`
  display: flex;  
  flex-basis: 50px;
  justify-content: center;
  align-items: center;
`

export const StyledTextContainer = styled.div`
  flex-grow: 1;
`

export const StyledButton = styled.button`
  flex-basis: 10px;
`

export const StyledWrapperList = styled.li`
  display: flex;
`

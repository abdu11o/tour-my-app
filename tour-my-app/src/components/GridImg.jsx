import React from 'react';
import styled from 'styled-components';
import { images } from '../images';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1px;
  margin: 20px;
`;

const GridItem = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  width: 100%;
  height: 400px;

`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Grid = () => {
  return (
    <GridWrapper>
        {
            images.map(({img})=>(
                <GridItem><Img src={img} alt="" /></GridItem>
            ))
        }
    </GridWrapper>
  );
};

export default Grid;
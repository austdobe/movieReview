import React from 'react';
//style
import { Wrapper, Image } from './Actor.styles';

const Actor = ({ name, character, imageUrl }) => (
    <Wrapper>
        <Image src={imageUrl}/>
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>


);

export default Actor
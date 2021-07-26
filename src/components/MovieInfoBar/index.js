import React from 'react';
//helpers
import { calcTime, convertMoney } from '../../helpers';
//style
import { Wrapper, Content } from './MovieInfoBar.styles';

const MovieInfoBar = ({ time, budget, revenue }) =>(
    <Wrapper>
        <Content>
            <div className='column'>
                <p>Running Time: {calcTime(time)}</p>
            </div>
            <div className='column'>
                <p>Budget: {budget > 0 ? `${convertMoney(budget)}` : 'Unavailable'}</p>
            </div>
            <div className='column'>
                <p>Revenue: {revenue > 0 ? `${convertMoney(revenue)}` : 'Unavailable'}</p>
            </div>
        </Content>
    </Wrapper>

);

export default MovieInfoBar
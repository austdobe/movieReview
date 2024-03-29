import React from "react";

//components
import Thumb from '../Thumb';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
//image
import NoImage from '../../images/no_image.jpg';
//styles
import { Wrapper, Content, Text } from './MovieInfo.styles';

const MovieInfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image= {
                    movie.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : NoImage
                }
                clickable = {false}
                alt='movie-thumb'
            />
            <Text>
                <h1> {movie.title} </h1>
                <h3> Plot </h3>
                <p>{movie.overview}</p>

                <div className="rating-directors">
                    <div className='releaseDate'>
                        <h3>Release Date</h3>
                        <div >{movie.release_date}</div>
                    </div>
                    <div>
                        <h3>Rating</h3>
                        <div className='score'>{movie.vote_average}</div>
                    </div>
                    <div className='director'>
                        <h3>Director{ movie.directors.length > 1 ? 's' : ''}</h3>
                        {movie.directors.map(director => (
                            <p key= {director.credit_id}>{director.name}</p>
                        ))}
                    </div>
                    
                </div>

            </Text>

        </Content>
    </Wrapper>

)

export default MovieInfo
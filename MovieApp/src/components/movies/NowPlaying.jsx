import React from "react";
import { useGetNowPlayingMoviesQuery } from "../../service/movieAPI";
import MovieCard from "../../reuseable/MovieCard";

const NowPlaying = () => { 

    const data = useGetNowPlayingMoviesQuery()

    return (
        <div>
            <MovieCard data={data} />
        </div>
    )

} 

export default NowPlaying
// components
import Star from "./Star"
import React, { useRef, useState } from "react";
import Constants from "../Constants"
const Song = (props) => {
  // initialize the Constants
  const allConstants = Constants()
  const { movie, album, name, rating, singers, genre, changeRating, _id, url } = props
  const audioPlayer = useRef();

  return (
    <div className="song-info">

      <div className="song-name">
        {name}

        <div className="song-artist">
          <span className="movie-info">{`${movie ? `Movie: ${movie}` : `Album: ${album}`
            }`}</span>
          <div className="popover">
            <span className="popover-icon fa fa-info-circle"></span>
            <div className="popover-content">
              <span className="popover-info">{`Name: ${name}`}</span>
              <span className="popover-info">{`Movie: ${movie ? movie : album
                }`}</span>
              <span className="popover-info">{`Genre: ${genre.join(
                ", "
              )}`}</span>
              <span className="popover-info">{`Singers: ${singers.join(
                ", "
              )}`}</span>
            </div>
          </div>
        </div>
      </div>
      
      <audio ref={audioPlayer}  src={process.env['PUBLIC_URL']+url} controls />
      <img src="/songs/k.png" />
      <div className="song-rating">
        {allConstants.RATING_POINTS.map((ele, index) => {
          return (
            <Star
              key={index}
              changeRating={() => changeRating(_id, ele)}
              rating={rating}
              index={ele}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Song

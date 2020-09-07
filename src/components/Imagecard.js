import React from 'react';
import './imagecard.css';

export default function imageCard(props) {
    return (
        <article className="wallpaper">
            <img src={props.imgsource} alt="Wallpaper #1" className="wallpaper" />
        </article>
    );
}
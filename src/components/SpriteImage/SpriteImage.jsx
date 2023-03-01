import React from 'react';

import minesweeperSprites from './sprites/minesweeper-sprites.png';

function SpriteImage({
    classes,
    className,
    ...props
}) {
    return (
        <div
            className={`${classes.image} ${className || ''}`}
            style={{backgroundImage: `url(${minesweeperSprites})`}}
            {...props}/>
    );
}

export default SpriteImage;
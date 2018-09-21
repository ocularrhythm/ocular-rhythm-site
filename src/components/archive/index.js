import React from 'react';

import PostBlock from '../post-block';

import style from './archive.module.css';

const Archive = ({ posts }) => {
    return (
        <div className={ style.posts }>
            { posts.map((i, c) => {
                return (
                    <PostBlock key={ c } meta={ i.node }/>
                );
            })}
        </div>
    );
};

export default Archive;

import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='mr-20 bg-gray-500'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;
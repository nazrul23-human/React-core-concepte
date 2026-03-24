import React from 'react';
import Link from './Link';

const navigationData = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];
const NavBar = () => {
    return (
        <nav>
            <ul className='flex bg-green-500'>
                {
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)

                }
            </ul>


            <ul className='flex'>
                {
                    navigationData.map(route=><li className='mr-20'><a href={route.path}>{route.name}</a></li>)

                }
            </ul>
            <ul className='flex bg-amber-400'>
                <li className='mr-20'><a href=""></a>Islam</li>
                <li className='mr-20'><a href=""></a>About</li>
                <li className='mr-20'><a href=""></a>Blog</li>
            </ul>

        </nav>
    );
};

export default NavBar;
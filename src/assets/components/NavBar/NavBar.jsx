import React, { useState } from 'react';
import Link from './Link';
import { Menu,X } from 'lucide-react';

const navigationData = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];
const NavBar = () => {
    const [open,setOpen] = useState(false)
    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <nav className='flex justify-between ms-10 text-cyan-600 mt-5'>
            <span className='flex'onClick={()=> setOpen(!open)}>
                {open ? <X className='md:hidden bg-red-500'>
                </X>:<Menu className='md:hidden  bg-white'>
                    </Menu>}
                
            <ul className={`md:hidden absolute duration-1000
                 ${open ? 'left-9 ' : '-left-50 '}
                 bg-white mt-6 `}>
                    {links}
                </ul>
            <h2 className='ml-4'>My Nav Bar</h2>
            </span>
            <ul className='md:flex hidden'>
                {
                   links 
                }
            </ul>


            {/* <ul className='flex'>
                {
                    navigationData.map(route => <li className='mr-20'><a href={route.path}>{route.name}</a></li>)

                }
            </ul> */}

            {/* <ul className='flex bg-amber-400'>
                <li className='mr-20'><a href=""></a>Islam</li>
                <li className='mr-20'><a href=""></a>About</li>
                <li className='mr-20'><a href=""></a>Blog</li>
            </ul> */}
            <button>Sign In</button>

        </nav>
    );
};

export default NavBar;
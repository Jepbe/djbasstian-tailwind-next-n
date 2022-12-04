import React from "react";
import Link from "next/link";
import Image from "next/image";
import DJBASStianLogo from '/public/bass_logo_1_hvid.png';
import { FaBars, FaInstagram, FaSoundcloud, FaYoutube, FaTiktok } from 'react-icons/fa';
import { Roboto } from '@next/font/google';
import { useState } from "react";



const roboto = Roboto({
    weight: '500',
});

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navItems = [
        {title: 'Hjem',link: '/', id: 1},
        {title: 'Butik',link: '/butik', id: 2},
        {title: 'Galleri',link: '/galleri', id: 3},
        {title: 'Kontakt',link: '/kontakt', id: 4},
        {title: 'Hvem er jeg?',link: '/hvemerjeg', id: 5},
    ];
    const navListItems = navItems.map(item =>
            <li className={"sml:ml-10 hidden sm:ml-6 sm:block sm:mt-0 mt-20"} key={item.id}>
              <Link legacyBehavior href={item.link}>
                    <a className="navbar-links text-3xl sm:text-[16px]">{item.title}</a>
                </Link>
            </li>
        );
    const navListItemsR = navItems.map(item =>
        <li className={"navListItemResponsive sml:ml-10 sm:ml-6 sm:block sm:mt-0 mt-16"} key={item.id}>
            <Link legacyBehavior href={item.link}>
                <a className="navbar-links text-3xl sm:text-[16px]">{item.title}</a>
            </Link>
        </li>
    );
    
    const navLinks = [
        {title: 'Instagram', link: "https://www.instagram.com/dj_basstian/", icon: <FaInstagram />, id: 1},
        {title: 'Soundcloud', link: "https://soundcloud.com/bastian-nielsen-360664195", icon: <FaSoundcloud />, id: 2},
        {title: 'YouTube', link: "https://www.youtube.com/channel/UCFjgyN5rCfz8SNGd56Lyp3Q", icon: <FaYoutube />, id: 3},
        {title: 'TikTok', link: "https://www.tiktok.com/@dj_basstian", icon: <FaTiktok />, id: 4},
    ];
    
    const navLinkLinks = navLinks.map(link =>
            <li className="ml-2" key={link.id}>
                <button className="inline text-light hover:text-hover text-xl sm:text-lg">
                    <Link href={link.link}  target="_blank">  {link.icon}  </Link>
                </button>
            </li>
        );

    return (
        <>
        <div className={roboto.className}>
        
        <nav className="fixed top-0 w-screen h-[60px]">
          
            <div className="w-[120px] h-[100px] absolute top-[-15px] left-[2vh]">
                <Image src={DJBASStianLogo} alt="Dj basstian blackl logo" />
            </div>
          
            <ul className="relative sm:left-[20vh] top-[0.5rem] flex flex-col justify-center text-center sm:flex-row sm:justify-start sm:text-center">
                {navListItems} 
            </ul>
          
            <div className="z-10 absolute right-5 top-0 sm:hidden">
                <i>
                    <FaBars onClick={() => setOpen(!open) } className="h-[60px] w-[30px] text-white" />
                </i>
            </div>
        
        </nav>
            <ul className="fixed top-[20px] right-[4.5rem] sm:right-5 w-[104px] flex flex-row">
                {navLinkLinks}
            </ul>
                {open && // change style so it disappeare when sceen go bigger
                    <ul className="backgroundColor mt-[-120vh] h-[120vh] hidden justify-center text-center flex-col">
                        {navListItemsR} 
                    </ul>
                } 
        </div>
        </>
    )
}
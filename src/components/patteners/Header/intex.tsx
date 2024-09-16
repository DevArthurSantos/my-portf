'use client'
import Image from 'next/image';
import logo from '@/assets/logo.png'
import menuIcon from '@/assets/menu-icon.png'
import closedMenu from '@/assets/closed-menu.png'
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);


  const handleItemMenuPress = () => {
    if (navbarIsOpen) {
      setNavbar(false)
      setNavbarIsOpen(false)
    }
  }

  return (
    <header>
      <nav className="w-full px-[120px] fixed top-0 left-0 right-0 z-[9999] p-8">
        <div className="justify-between mx-auto lg:items-center lg:flex">
          <div>
            <div className="flex items-center justify-between lg:block">
              <Link href='/'>
                <Image className='' src={logo} width={57.99} height={31} alt="logotipo com as letras AS em laranja" />
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="lg:hidden lg:py-5 z-50">
                <button
                  className=" text-gray-700 rounded-lg outline-none focus:border-gray-400 focus:border"
                  onClick={() => {
                    setNavbar(!navbar)
                    setNavbarIsOpen(!navbarIsOpen)
                  }}
                >
                  {navbar ? (
                    <Image src={closedMenu} width={32} height={32} alt="closed icon" />
                  ) : (
                    <Image
                      src={menuIcon}
                      width={94}
                      height={32}
                      alt="menu icon"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 lg:block lg:pb-0 lg:mt-0 ${navbar ? 'p-12 lg:p-0 w-[100vw] h-[100vh] lg:h-auto lg:w-auto top-0 left-0 fixed bg-background' : 'hidden'
                }`}
            >
              <ul className="h-screen lg:h-auto items-center justify-center lg:flex gap-8">
                <li className="py-6 font-bold lg:py-0 text-center border-b-2 lg:border-b-0 lg:hover:text-purple-600 lg:hover:bg-transparen">
                  <Link href="#homeSection" onClick={() => handleItemMenuPress()}>
                    INICIO
                  </Link>
                </li>
                <li className="py-6 font-bold lg:py-0 text-center border-b-2 lg:border-b-0 lg:hover:text-purple-600 lg:hover:bg-transparen">
                  <Link href="#WorksSection" onClick={() => handleItemMenuPress()}>
                    EXPERIENCIAS
                  </Link>
                </li>
                <li className="py-6 font-bold lg:py-0 text-center border-b-2 lg:border-b-0 lg:hover:text-purple-600 lg:hover:bg-transparen">
                  <Link href="#ProjectsSection" onClick={() => handleItemMenuPress()}>
                    PROJETOS
                  </Link>
                </li>
                <li className="py-6 font-bold lg:py-0 text-center border-b-2 lg:border-b-0 lg:hover:text-purple-600 lg:hover:bg-transparen">
                  <Link href="#TechnologiesSection" onClick={() => handleItemMenuPress()}>
                    TECNOLOGIAS
                  </Link>
                </li>
                <li className="py-6 font-bold lg:py-0 text-center border-b-2 lg:border-b-0 lg:hover:text-purple-600 lg:hover:bg-transparen">
                  <Link href="#ContactSection" onClick={() => handleItemMenuPress()}>
                    CONTATO
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
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
        <div className="justify-between mx-auto md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between md:block">
              <Link href='/'>
                <Image src={logo} width={57.99} height={31} alt="logotipo com as letras AS em laranja" />
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden md:py-5 z-50">
                <button
                  className=" text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
              className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 w-[100vw] h-[100vh] md:h-auto md:w-auto top-0 left-0 fixed bg-background' : 'hidden'
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex gap-8">
                <li className="py-6 font-bold md:py-0 text-center border-b-2 md:border-b-0 md:hover:text-purple-600 md:hover:bg-transparen">
                  <Link href="#homeSection" onClick={() => handleItemMenuPress()}>
                    INICIO
                  </Link>
                </li>
                <li className="py-6 font-bold md:py-0 text-center border-b-2 md:border-b-0 md:hover:text-purple-600 md:hover:bg-transparen">
                  <Link href="#ProjectsSection" onClick={() => handleItemMenuPress()}>
                    PROJETOS
                  </Link>
                </li>
                <li className="py-6 font-bold md:py-0 text-center border-b-2 md:border-b-0 md:hover:text-purple-600 md:hover:bg-transparen">
                  <Link href="#TechnologiesSection" onClick={() => handleItemMenuPress()}>
                    TECNOLOGIAS
                  </Link>
                </li>
                <li className="py-6 font-bold md:py-0 text-center border-b-2 md:border-b-0 md:hover:text-purple-600 md:hover:bg-transparen">
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
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import logo from '../../image/logo.png'

const menus = {
  'Category Root': [
    { label: 'Living room', href: '/living-room' },
    { label: 'Dining room', href: '/dining-room' },
    { label: 'Bedroom', href: '/bedroom' },
    { label: 'Home office', href: '/home-office' },
    { label: 'Storage', href: '/storage' },
    { label: 'Decor', href: '/decor' },
  ],

  Living: [
    { label: 'Sofas', href: '/sofas' },
    { label: 'Coffee tables', href: '/coffee-tables' },
    { label: 'TV units', href: '/tv-units' },
    { label: 'Armchairs', href: '/armchairs' },
    { label: 'Rugs', href: '/rugs' },
    { label: 'Lighting', href: '/lighting' },
  ],

  Sofa: [
    { label: '2 seater sofas', href: '/2-seater-sofas' },
    { label: '3 seater sofas', href: '/3-seater-sofas' },
    { label: 'Corner sofas', href: '/corner-sofas' },
    { label: 'Sofa beds', href: '/sofa-beds' },
    { label: 'Recliners', href: '/recliners' },
    { label: 'Ottomans', href: '/ottomans' },
  ],

  Pages: [
    { label: 'About', href: '/about-us' },
    { label: 'Cart', href: '/cart' },
    { label: 'Checkout', href: '/checkout' },
    { label: 'Frequency', href: '/frequency' },
    { label: 'contact', href: '/contact-us' },
    { label: 'product', href: '/product' },
  ]
}

function Chevron({ open }) {
  return (
    <span
      aria-hidden="true"
      className={`text-lg leading-none transition-transform ${
        open ? 'rotate-180' : ''
      }`}
    >
      ⌄
    </span>
  )
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const headerRef = useRef(null)

  useEffect(() => {
    const closeMenus = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setOpenMenu(null)
      }
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpenMenu(null)
        setMobileOpen(false)
        setCartOpen(false)
      }
    }

    document.addEventListener('mousedown', closeMenus)
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('mousedown', closeMenus)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className="relative z-30 border-t-2 border-[#3d3029] bg-white text-[#171717]"
    >

      {/* TOP BAR */}
      <div className="border-b border-[#e9e9e9]">
        <div className="mx-auto flex min-h-17 max-w-[1700px] items-center justify-between px-5 text-sm sm:px-10 lg:px-14">

          <p className="truncate">
            Contact us 24/7 : +91-98745612330
            <span className="hidden sm:inline">
              {' '}
              / furniture@gmail.com
            </span>
          </p>

          <Link
            href="/login"
            className="ml-4 shrink-0 hover:text-[#b88968]"
          >
            Login / Register
          </Link>

        </div>
      </div>


      {/* LOGO + SEARCH + CART */}
      <div className="border-b border-[#e9e9e9]">
        <div className="mx-auto flex max-w-[1700px] flex-wrap items-center gap-4 px-5 py-3 sm:px-10 lg:flex-nowrap lg:gap-8 lg:px-14">

          {/* LOGO */}
          <Link href="/" aria-label="Monsta home" className="shrink-0">
            <Image
              src={logo}
              alt="Monsta"
              width={190}
              height={61}
              className="h-auto w-[120px] sm:w-[150px]"
              priority
            />
          </Link>


          {/* SEARCH */}
          <div className="order-3 flex w-full lg:order-0 lg:ml-auto lg:w-99.25">

            <label htmlFor="product-search" className="sr-only">
              Search product
            </label>

            <div className="flex h-11.5 w-full items-center border border-[#e4e4e4] px-4 focus-within:border-[#bd9172]">

              <input
                id="product-search"
                type="search"
                placeholder="Search product..."
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#707070]"
              />

              <button
                type="button"
                aria-label="Search"
                className="text-2xl leading-none text-[#07111a] hover:text-[#b88968]"
              >
                ⌕
              </button>

            </div>
          </div>


          {/* WISHLIST + CART */}
          <div className="ml-auto flex h-11.5 items-center gap-3 sm:gap-5">

            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="flex h-10 w-13 items-center justify-center border border-[#e4e4e4] text-2xl text-[#07111a] hover:text-[#b88968]"
            >
              ♥
            </Link>

            <button
              type="button"
              aria-label="Open cart"
              aria-expanded={cartOpen}
              onClick={() => setCartOpen(true)}
              className="flex items-center gap-2 border-l border-[#e4e4e4] pl-3 text-sm font-semibold hover:text-[#b88968] sm:pl-5"
            >

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c79b7a] text-white">
                0
              </span>

              <span aria-hidden="true" className="text-xl">
                🛒
              </span>

              <span className="hidden sm:inline">
                Rs. 0.00
              </span>

              <span aria-hidden="true" className="text-lg">
                ⌄
              </span>

            </button>

          </div>

        </div>
      </div>


      {/* NAVIGATION */}
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-275 px-5 sm:px-8"
      >

        {/* MOBILE MENU BUTTON */}
        <div className="flex min-h-16 items-center justify-between lg:hidden">

          <span className="text-xs font-semibold uppercase tracking-wider text-[#b88968]">
            Menu
          </span>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-[#e4e4e4]"
          >
            <span className="h-px w-5 bg-current" />
            <span className="h-px w-5 bg-current" />
            <span className="h-px w-5 bg-current" />
          </button>

        </div>


        {/* MOBILE NAV */}
        <div
          id="mobile-menu"
          className={`${
            mobileOpen ? 'block' : 'hidden'
          } border-t border-[#e9e9e9] pb-4 lg:hidden`}
        >

          {Object.entries(menus).map(([menu, links]) => (

            <div
              key={menu}
              className="border-b border-[#e9e9e9]"
            >

              <button
                type="button"
                aria-expanded={openMenu === menu}
                onClick={() =>
                  setOpenMenu(
                    openMenu === menu ? null : menu
                  )
                }
                className="flex min-h-14 w-full items-center justify-between text-left font-semibold uppercase tracking-wide"
              >

                {menu}

                <Chevron open={openMenu === menu} />

              </button>


              <div
                className={`grid overflow-hidden transition-[max-height,opacity] duration-300 ${
                  openMenu === menu
                    ? 'max-h-80 opacity-100'
                    : 'pointer-events-none max-h-0 opacity-0'
                }`}
              >

                <div className="grid grid-cols-2 gap-x-5 pb-3">

                  {links.map((link) => (

                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => {
                        setMobileOpen(false)
                        setOpenMenu(null)
                      }}
                      className="py-2 text-sm text-[#686868] hover:text-[#b88968]"
                    >
                      {link.label}
                    </Link>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* DESKTOP NAV */}
        <div className="hidden min-h-16 items-center justify-center gap-7 lg:flex xl:gap-12">

          {/* HOME */}
          <Link
            href="/"
            className="text-xs font-semibold uppercase text-[#c09170] hover:text-[#171717]"
          >
            Home
          </Link>


          {/* DROPDOWN MENUS */}
          {Object.entries(menus).map(([menu, links]) => (

            <div
              key={menu}
              className="relative h-16"
              onMouseEnter={() => setOpenMenu(menu)}
              onMouseLeave={() => setOpenMenu(null)}
            >

              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={openMenu === menu}
                onClick={() =>
                  setOpenMenu(
                    openMenu === menu ? null : menu
                  )
                }
                onFocus={() => setOpenMenu(menu)}
                className="flex h-full items-center gap-1.5 text-xs font-semibold uppercase hover:text-[#c09170]"
              >

                {menu}

                <Chevron open={openMenu === menu} />

              </button>


              {/* DROPDOWN */}
              <div
                onMouseEnter={() => setOpenMenu(menu)}
                className={`absolute top-full z-40 overflow-hidden border border-[#e5e0dc] bg-white p-6 shadow-[0_14px_35px_rgba(0,0,0,0.12)] transition-[max-height,opacity,transform] duration-300 ease-out ${
                  menu === 'Pages'
                    ? 'left-1/2 w-64 -translate-x-1/2'
                    : 'left-1/2 w-[min(760px,80vw)] -translate-x-1/2'
                } ${
                  openMenu === menu
                    ? 'max-h-125 translate-y-0 opacity-100'
                    : 'pointer-events-none max-h-0 -translate-y-2 opacity-0'
                }`}
              >

                <div
                  className={
                    menu === 'Pages'
                      ? 'grid grid-cols-1 gap-1'
                      : 'grid grid-cols-3 gap-6'
                  }
                >

                  {links.map((link) => (

                    <Link
                      key={link.href}
                      href={link.href}
                      className="border-b border-[#f0ece9] py-3 text-sm hover:text-[#c09170]"
                    >
                      {link.label}
                    </Link>

                  ))}

                </div>

              </div>

            </div>

          ))}


          {/* CONTACT */}
          <Link
            href={"/product"}
            className="text-xs font-semibold uppercase hover:text-[#c09170]"
          >
            Product
          </Link>
          <Link
            href={"/contact-us"}
            className="text-xs font-semibold uppercase hover:text-[#c09170]"
          >
            Contact Us
          </Link>

        </div>

      </nav>


      {/* CART SIDEBAR */}
      <div
        className={`fixed inset-0 z-50 ${
          cartOpen
            ? 'pointer-events-auto'
            : 'pointer-events-none'
        }`}
        aria-hidden={!cartOpen}
      >

        <button
          type="button"
          aria-label="Close cart"
          onClick={() => setCartOpen(false)}
          className={`absolute inset-0 bg-black/30 transition-opacity ${
            cartOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />


        <aside
          role="dialog"
          aria-label="Shopping cart"
          className={`absolute right-0 top-0 h-full w-[min(380px,90vw)] bg-white p-6 shadow-2xl transition-transform duration-300 ${
            cartOpen
              ? 'translate-x-0'
              : 'translate-x-full'
          }`}
        >

          <div className="flex items-center justify-between border-b border-[#e9e9e9] pb-4">

            <h2 className="text-lg font-semibold">
              Your Cart
            </h2>

            <button
              type="button"
              aria-label="Close cart"
              onClick={() => setCartOpen(false)}
              className="text-2xl leading-none hover:text-[#b88968]"
            >
              ×
            </button>

          </div>

          <p className="py-10 text-center text-sm text-[#777]">
            Your cart is currently empty.
          </p>

        </aside>

      </div>

    </header>
  )
}


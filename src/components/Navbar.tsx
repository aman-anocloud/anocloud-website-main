'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import clsx from 'clsx'

const navItems = [
  {
    title: 'Who We Are',
    base: '/about',
    items: ['our-method', 'our-team', 'careers'],
  },
  {
    title: 'What We Do',
    base: '/services',
    items: [
      { title: 'Prototype & MVP Development', path: '/services/prototype-mvp' },
      { title: 'Software Application Development', path: '/services/software-development' },
      { title: 'Cyber Security & Risk Management', path: '/services/cybersecurity-risk' },
      { title: 'Data Analytics & Data Engineering', path: '/services/data-analytics' },
      { title: 'AI Development & Integration', path: '/services/ai-development' },
      { title: 'Cloud & Infrastructure Modernisation', path: '/services/cloud-infrastructure' },
    ],
  },
  {
    title: 'Industry',
    base: '/industry',
    items: ['healthcare', 'finance', 'retail', 'manufacturing', 'agriculture', 'education'],
  },
  {
    title: 'Partners',
    base: '/partners',
    // Simplified partner menu to avoid linking to many non-existent partner detail pages
    items: [
      { title: 'All Partners', path: '/partners' },
      { title: 'Apply for Partnership', path: '/partners/apply' },
    ],
  },
  {
    title: 'Product',
    base: '/product',
    // single page product section
    items: [],
  },
  {
    title: 'Resources',
    base: '/resources',
    items: [
      { title: 'Blog', path: '/resources/blog' },
      { title: 'Badges', path: '/resources/badges' },
      { title: 'FAQs', path: '/resources/FAQs' },
    ],
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const lastScrollY = useRef(0)
  const headerRef = useRef<HTMLDivElement>(null)

  // Show/hide navbar on scroll down/up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastScrollY.current && currentY > 100) {
        setShowNav(false)  // scrolling down => hide navbar
      } else {
        setShowNav(true)   // scrolling up => show navbar
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdowns on route change
  useEffect(() => {
    setOpen(null)
    setMobileOpen(false)
  }, [pathname])

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!headerRef.current) return
      if (!headerRef.current.contains(e.target as Node)) setOpen(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const toggleDropdown = (title: string) => {
    setOpen(prev => (prev === title ? null : title))
  }

  const headerBg = 'bg-white border-b border-gray-200 shadow-sm' // static white background

  const linkBase =
    'relative inline-flex items-center gap-1 py-2 text-sm font-medium transition-colors'

  const underline =
          'after:absolute after:-bottom-0.5 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-green-primary after:transition-all after:duration-300 hover:after:w-full'

  const isActiveBase = (base: string) => pathname.startsWith(base)

  return (
    <>
      <header
        ref={headerRef}
        className={clsx(
          'fixed inset-x-0 top-0 z-50 transform-gpu transition-transform duration-300',
          headerBg,
          showNav ? 'translate-y-0' : '-translate-y-full'
        )}
        style={{ height: 104 /* equals h-26 (26*4px) to fix space below */ }}
      >
        <div className="mx-auto flex h-26 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo (bigger) */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="AnoCloud Logo" width={160} height={48} className="h-24 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((nav) => {
              const hasDropdown = nav.items?.length > 0
              const active = isActiveBase(nav.base)

              return (
                <div key={nav.title} className="relative">
                  <div className="flex items-center gap-1">
                    <Link
                      href={nav.base}
                      className={clsx(
                        linkBase,
                        underline,
                        active ? 'text-green-primary' : 'text-gray-900 hover:text-green-primary'
                      )}
                      onMouseEnter={() => setOpen(nav.title)}
                    >
                      {nav.title}
                    </Link>

                    {hasDropdown && (
                      <button
                        aria-label={`${nav.title} menu`}
                        className={clsx(
                          'p-1 transition-colors',
                          active ? 'text-green-primary' : 'text-gray-600 hover:text-green-primary'
                        )}
                        onClick={() => toggleDropdown(nav.title)}
                        onMouseEnter={() => setOpen(nav.title)}
                      >
                        <ChevronDown
                          size={16}
                          className={clsx(
                            'transition-transform duration-300',
                            open === nav.title ? 'rotate-180' : 'rotate-0'
                          )}
                        />
                      </button>
                    )}
                  </div>

                  {hasDropdown && open === nav.title && (
                    <div
                      onMouseLeave={() => setOpen(null)}
                      className={clsx(
                        'absolute left-1/2 top-[calc(100%+12px)] -translate-x-1/2',
                        'inline-block'
                      )}
                    >
                      <div
                        className={clsx(
                          'rounded-xl border border-gray-200 bg-white shadow-xl supports-[backdrop-filter]:backdrop-blur-md p-2'
                        )}
                        style={{ minWidth: 180 }}
                      >
                        <ul className="flex flex-col space-y-1">
                          {nav.items.map((item) => {
                            const href = typeof item === 'string' ? `${nav.base}/${item}` : item.path
                            const label = typeof item === 'string' ? item.replace(/-/g, ' ') : item.title
                            const selected = pathname === href
                            return (
                              <li key={href}>
                                <Link
                                  href={href}
                                  onClick={() => setOpen(null)}
                                  className={clsx(
                                    'block rounded-md px-4 py-2 text-sm capitalize whitespace-nowrap',
                                    selected
                                      ? 'bg-[#f0fdf9] text-green-primary'
                                      : 'text-gray-800 hover:bg-gray-50 hover:text-green-primary'
                                  )}
                                >
                                  {label}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}

            <Link
              href="/contact"
              className="rounded-full bg-green-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-dark"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-100"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={clsx(
            'fixed inset-0 z-50 md:hidden transition',
            mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
          )}
          aria-hidden={!mobileOpen}
        >
          {/* Backdrop */}
          <div
            className={clsx(
              'absolute inset-0 bg-black/40 transition-opacity',
              mobileOpen ? 'opacity-100' : 'opacity-0'
            )}
            onClick={() => setMobileOpen(false)}
          />
          {/* Panel */}
          <div
            className={clsx(
              'absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl transition-transform',
              mobileOpen ? 'translate-x-0' : 'translate-x-full'
            )}
          >
            <div className="flex items-center justify-between px-4 py-4">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <Image src="/logo.png" alt="AnoCloud Logo" width={56} height={28} className="h-7 w-auto" />
              </Link>
              <button
                className="rounded-md p-2 text-gray-900 hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="px-2 pb-6">
              {navItems.map((nav) => {
                const hasDropdown = nav.items?.length > 0

                // Inline component for local dropdown state
                const Item = () => {
                  const [accOpen, setAccOpen] = useState(false)
                  return (
                    <div className="mb-1">
                      <div className="flex items-center justify-between">
                        <Link
                          href={nav.base}
                          className={clsx(
                            'px-3 py-2 text-base font-medium',
                            pathname.startsWith(nav.base) ? 'text-green-primary' : 'text-gray-900 hover:text-green-primary'
                          )}
                          onClick={() => setMobileOpen(false)}
                        >
                          {nav.title}
                        </Link>
                        {hasDropdown && (
                          <button
                            className="px-3 py-2 text-gray-700"
                            onClick={() => setAccOpen(p => !p)}
                            aria-label={`${nav.title} submenu`}
                          >
                            <ChevronDown
                              size={18}
                              className={clsx(
                                'transition-transform duration-300',
                                accOpen ? 'rotate-180' : 'rotate-0'
                              )}
                            />
                          </button>
                        )}
                      </div>

                      {hasDropdown && accOpen && (
                        <div className="ml-2 border-l border-gray-200 pl-3">
                          {nav.items.map((item) => {
                            const href = typeof item === 'string' ? `${nav.base}/${item}` : item.path
                            const label = typeof item === 'string' ? item.replace(/-/g, ' ') : item.title
                            const selected = pathname === href
                            return (
                                <Link
                                  key={href}
                                  href={href}
                                  className={clsx(
                                    'block rounded-md px-2 py-2 text-sm capitalize',
                                    selected ? 'bg-[#f0fdf9] text-green-primary' : 'text-gray-800 hover:bg-gray-50'
                                  )}
                                  onClick={() => setMobileOpen(false)}
                                >
                                {label}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                }

                return <Item key={nav.title} />
              })}

              <div className="mt-4 px-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-full bg-green-primary px-5 py-2 text-center text-sm font-semibold text-white hover:bg-green-dark"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer div to prevent navbar overlapping page content */}
      <div style={{ height: 104 }} />
    </>
  )
}

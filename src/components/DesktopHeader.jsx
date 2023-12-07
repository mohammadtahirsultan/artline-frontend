import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const DesktopHeader = () => {
    const [active, setActive] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();

    // Update active state when the route changes
    useEffect(() => {
        const handleRouteChange = () => {
            setActive(false); // Reset active state on route change
        };

        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    // Set 'active' class for the initial route
    useEffect(() => {
        setActive(router.pathname === '/');
    }, [router.pathname]);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    return (
        <>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto">
                        <Link href="/" className={active ? 'active' : ''}>Artline<span>.</span></Link>
                    </h1>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                <Link href="/" className={router.pathname === '/' ? 'nav-link scrollto active' : 'nav-link scrollto'}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className={router.pathname === '/about' ? 'nav-link scrollto active' : 'nav-link scrollto'}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className={router.pathname === '/services' ? 'nav-link scrollto active' : 'nav-link scrollto'}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className={router.pathname === '/portfolio' ? 'nav-link scrollto active' : 'nav-link scrollto'}>
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className={router.pathname === '/team' ? 'nav-link scrollto active' : 'nav-link scrollto'}>
                                    Team
                                </Link>
                            </li>
                            <li class="dropdown"><a href="#"><span>Pages</span> <i class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><Link href="/faq">FAQs</Link></li>
                                    <li><Link href="/pricing">Pricing</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/contact" className={router.pathname === '/contact' ? 'nav-link scrollto active' : 'nav-link scrollto'}>
                                    Contact
                                </Link>
                            </li>

                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <Link href="/about" className="get-started-btn scrollto">
                        Get Started
                    </Link>
                </div>
            </header>
        </>
    );
};

export default DesktopHeader;

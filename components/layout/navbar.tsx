'use client'
import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarButton, NavbarLogo, NavBody, NavItems } from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ModeToggle } from "../theme/mode-toggle";

const NavBar = () => {
    const navItems = [
        {
            name: "Universities",
            link: "/universities",
        },
        {
            name: "Study Abroad",
            link: "/study-abroad",
        },
        {
            name: "Find Programs",
            link: "#programs",
        },
        {
            name: "Contact Us",
            link: "#contact",
        },
        {
            name: "About Us",
            link: "/about-us",
        },
    ];

    // State to manage mobile menu visibility
    // This state will toggle the mobile menu open and close
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
                <div className="flex items-center gap-4">
                    {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
                    <ModeToggle />
                    <NavbarButton variant="primary">Book a call</NavbarButton>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    {navItems.map((item, idx) => (
                        <a
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="relative text-neutral-600 dark:text-neutral-300"
                        >
                            <span className="block">{item.name}</span>
                        </a>
                    ))}
                    <div className="flex items-center w-full flex-col gap-4">
                        <ModeToggle />
                        <NavbarButton
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="primary"
                            className="w-full"
                        >
                            Book a call
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    )
}

export default NavBar;
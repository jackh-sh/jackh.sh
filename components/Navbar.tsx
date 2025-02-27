import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import UnderlineLink from "./UnderlineLink";

interface NavbarItem {
    name: string;
    href: string;
}

const NavItems: NavbarItem[] = [
    {
        name: "About",
        href: "/",
    },
    {
        name: "Blog",
        href: "/blog",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link
                        href="/"
                        className="border border-black dark:border-white p-2"
                    >
                        <span className="font-medium">JH</span>
                    </Link>
                    <nav className="space-x-8">
                        {NavItems.map((item) => (
                            <UnderlineLink href={item.href}>
                                {item.name.toUpperCase()}
                            </UnderlineLink>
                        ))}
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}

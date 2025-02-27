import Link from "next/link";

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
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="border border-black p-2">
                        <span className="font-medium">JH</span>
                    </Link>
                    <nav className="space-x-8">
                        {NavItems.map((item) => (
                            <Link
                                href={item.href}
                                className="text-black hover:opacity-70 relative group"
                            >
                                <span className="relative z-10">
                                    {item.name.toUpperCase()}
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}

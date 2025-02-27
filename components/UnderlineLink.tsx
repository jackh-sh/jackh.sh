import Link from "next/link";
import { PropsWithChildren } from "react";

interface UnderlineLinkProps extends PropsWithChildren {
    href: string;
}

export default function UnderlineLink(props: UnderlineLinkProps) {
    return (
        <Link
            href={props.href}
            className="text-black dark:text-white  relative group"
        >
            <span className="relative z-10">{props.children}</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </Link>
    );
}

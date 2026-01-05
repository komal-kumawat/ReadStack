import Image from "next/image";
import Link from "next/link";

const navItems = [
    { label: "Essays", href: "/essays" },
    { label: "Stories", href: "/stories" },
    { label: "Poems", href: "/poems" },
    { label: "Books", href: "/books" },
    {label:"All" , href:"/all"}
];

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-[#0f0f0f]/80 backdrop-blur border-b border-white/10">
            <div className="max-w-5xl mx-auto px-10 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-xl font-semibold text-gray-100">
                    <Image src="/images/logo.svg" alt="Logo"
                        width={150}
                        height={50}
                    ></Image>
                </Link>

                {/* Navigation */}
                <div className="flex gap-8">
                    {navItems.map(item => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

            </div>
        </nav>
    );
}

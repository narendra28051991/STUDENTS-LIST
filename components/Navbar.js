import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src='/hyf-logo.svg' width={77} height={77} />
            </div>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/students'>Student Listing</Link>
        </nav>
    );
}

export default Navbar;
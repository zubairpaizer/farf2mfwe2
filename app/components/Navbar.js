import Link from "next/link"

export const Navbar = (props) => {
	return 	<nav className="navbar">
		<Link href={'/pool'}>Pool</Link>
		<Link href={'/farm'}>Farm</Link>
	</nav>
}
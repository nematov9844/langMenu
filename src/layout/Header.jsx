/** @format */


export default function Header() {

	return (
        <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
<div>LOGO</div>
    <ul className="flex items-center gap-4">
        <li className="cursor-pointer text-xl">Home</li>
        <li className="cursor-pointer text-xl">About</li>
        <li className="cursor-pointer text-xl">Contact</li>
        <button>Salu</button>
    </ul>
        </header>
    )
}

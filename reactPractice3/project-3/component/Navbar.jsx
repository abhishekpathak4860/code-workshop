
export default function Navbar() {
    return (
        <header>
            <div className="logo">
                <img src="/public/brand.png" alt="" />
            </div>
            <div className="nav">
                <ul>
                    <li>Menu</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="login">Login</div>
        </header>
    )
}

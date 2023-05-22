import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Header: React.FC = () => {
    const { user, logout } = useAuth();

    return (
        <header className={"flex justify-between items-center p-4 bg-black text-white"}>
            <div className={"flex items-center"}>
                <img src={"/logo.png"} alt={"A logo of a small stylized brain"} className={"w-12 h-12 mr-2"} />
                <h1 className={"text-xl text-blue-500"}>ExoCortext</h1>
            </div>

            <nav>
                <Link to={"/"} className={"mr-2 text-orange-500"}>Home</Link>
                <Link to={"/about"} className={"mr-2 text-orange-500"}>About</Link>
            </nav>

            <div>
                {user ? (
                    <div className={"relative"}>
                        <img src={user.avatar} alt={"User avatar"} className={"w-8 h-8 rounded-full"} />
                        <button className="ml-2 text-orange-500">▼</button>
                        <div className={"absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg p-2"}>
                            <Link to={"/account"} className={"block text-orange-500"}>Account</Link>
                            <button onClick={logout} className={"block text-orange-500"}>Logout</button>
                        </div>
                    </div>
                ) : (
                    <Link to={"/login"} className={"text-orange-500"}>Login / Sign Up</Link>
                )}
            </div>
        </header>
    );
}

export default Header;
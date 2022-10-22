import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaGitter } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import auth from "../Firebase/Firebase.init";

const Header = () => {
    const [user] = useAuthState(auth);

    const pathname = useLocation();

    const menubar = (<>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li> 
    </>);

    const logout = () =>{
        signOut(auth);
    }

    return (
        <div className="navbar shadow bg-slate-500 sticky top-0 z-20 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-500 rounded-box w-52">
                    {menubar}
                    </ul>

                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">MineShop</Link>
                 <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">
                 <FaGitter /> 
                    </label>  
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menubar}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <p className="px-2">{user?.displayName?.slice(0, 6)}</p>
                }
                { 
                user ? 
                <button onClick={logout} className="btn btn-link text-white">SignOut</button>
                :
                <Link to="/login" className="btn btn-sm">Login</Link>
                }
                
            </div>
      </div>
    );
};

export default Header;
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';
import auth from "../Firebase/Firebase.init";

const Header = () => {
    const [user] = useAuthState(auth);
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
        <div class="navbar shadow bg-slate-500 sticky top-0 z-20 text-white">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-500 rounded-box w-52">
                    {menubar}
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menubar}
                </ul>
            </div>
            <div class="navbar-end">
            { user ? 
            <button onClick={logout} className="btn btn-sm">SignOut</button>
            :
            <Link to="/login" className="btn btn-sm">Login</Link>
            }
            </div>
      </div>
    );
};

export default Header;
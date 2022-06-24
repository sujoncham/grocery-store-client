import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col justify-start">
               
                
                <Outlet></Outlet>
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
                
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/dashboard/allProductList'>All Products</Link></li>
                <li><Link to='/dashboard/allUserList'>All Users</Link></li>
                <li><Link to='/dashboard/productAdd'>Product Add</Link></li>
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;
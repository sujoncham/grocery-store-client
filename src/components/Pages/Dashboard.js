import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col justify-start">
                {/* Page content here  */}
                <h1 className="text-3xl font-bold mt-10 mb-10">Welcome to Dashboard</h1>
                <label for="dashboard-drawer" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            
            </div> 
            <div class="drawer-side">
                <label for="dashboard-drawer" class="drawer-overlay"></label> 
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                
                <li><Link to='dashboard'>Dashboard</Link></li>
                <li><Link to='allProductList'>All Products</Link></li>
                <li><Link to='allUserList'>All Users</Link></li>
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;
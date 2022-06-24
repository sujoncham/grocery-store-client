import { useNavigate } from 'react-router-dom';
const Page404 = () => {
    const navigate = useNavigate();
    const handleBackToHome = ()=>{
            navigate('/');
    }
    return (
        <div className="grid place-content-center p-10">
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/Kwbkw8J/page404.jpg" alt="Page404" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Page Not Found</h2>
                    <p>Please, check your internet connection or url!!</p>
                    <div class="card-actions justify-end">
                    <button onClick={handleBackToHome} class="btn btn-primary">Back to Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page404;
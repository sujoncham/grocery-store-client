import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let textEror;
    if (error) {
        textEror =  `Error: ${error?.message}`;
      }

      if (loading) {
        return <p>Loading...</p>;
      }

      if (user) {
    navigate('/');
    }

const handleLoginForm = (event)=>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    if(email === '' || password === ''){
        console.log('Email or Password is empty!!')
    }
    console.log(email, password);

}

    return (
        <div className="grid place-content-center p-10">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="text-center text-3xl">Login</h2>
                    <div className="divider"></div>
                    <form onSubmit={handleLoginForm} className="px-10">
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Type here" className="input input-bordered" />
                        </div>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text">PassWord</span>
                            </label>
                            <input type="password" name="password" placeholder="Type here" className="input input-bordered" />
                        </div>
                        
                    <div className="text-center mt-10">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    </form>
                    <p className='text-red-500'>{textEror}</p>
                    <div>
                        <p>New at Grocery Store? <a href="/register" className="text-blue-500">create account</a> here </p>
                    </div>
                    <div className="divider">OR</div>
                    <div className="text-center mt-10">
                        <button onClick={()=>signInWithGoogle()} className="btn btn-primary">Sign in with Google</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
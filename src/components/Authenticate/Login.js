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
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="text-center text-3xl">Login</h2>
                    <div class="divider"></div>
                    <form onSubmit={handleLoginForm} className="px-10">
                        <div class="form-control w-80">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Type here" class="input input-bordered" />
                        </div>
                        <div class="form-control w-80">
                            <label class="label">
                                <span class="label-text">PassWord</span>
                            </label>
                            <input type="password" name="password" placeholder="Type here" class="input input-bordered" />
                        </div>
                        
                    <div class="text-center mt-10">
                        <button class="btn btn-primary">Login</button>
                    </div>
                    </form>
                    <p className='text-red-500'>{textEror}</p>
                    <div>
                        <p>New at Grocery Store? <a href="/register" className="text-blue-500">create account</a> here </p>
                    </div>
                    <div class="divider">OR</div>
                    <div class="text-center mt-10">
                        <button onClick={()=>signInWithGoogle()} class="btn btn-primary">Sign in with Google</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
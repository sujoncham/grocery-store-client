import { sendEmailVerification } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";
import Loading from "../SharedPart/Loading";


const RequireAuth = ({children}) =>{
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <Loading></Loading>;
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace />
    }

    const handleEmailSent = async () =>{
        await sendEmailVerification();
        toast('Sent Email');
    }

    if(user.providerData[0]?.providerId === 'password' && !user.emailVerified){
        return (
                <div className="w-50 mx-auto">
                    <h3 className="text-danger">email not verified</h3>
                    <h3 className="text-danger">Please, email verified</h3>
                    <button onClick={handleEmailSent} className="btn btn-primary">Sent email verification</button>
                </div>
        )
    }

    return children;
}

export default RequireAuth;
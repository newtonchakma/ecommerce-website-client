import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../SharePage/Navbar/Footer/Loading';


const SignUp = () => {
   
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate =useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
      let signInError;
      if( loading || gLoading){
        return <Loading></Loading>
    }
      
    if(gUser || user){
        console.log(gUser,user);
        navigate('/home');
    }
    const onSubmit = data => {
        console.log(data);
        createUserWithEmailAndPassword(data.email, data.password)
    }
    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }
    return (
        <div className='flex justify-center items-center h-screen my-5 font-serif'>
        <div className="card w-96 bg-base-100 shadow-xl">
         <div className="card-body">
           <h2 className="text-center text-2xl font-bold">
            signUp
           </h2>

           <form onSubmit={handleSubmit(onSubmit)}>
           <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

           <div class="form-control w-full max-w-xs">
                   <label class="label">
                   <span class="label-text">Email</span>
                </label>
               <input
                type="email"
                 placeholder="Your email"
                  class="input input-bordered w-full max-w-xs"
                   {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                 })}/>
           <label className="label">
                  {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                 {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            </label>
               
    </div>

           <div class="form-control w-full max-w-xs">
                   <label class="label">
                   <span class="label-text">password</span>
                </label>
               <input
                type="password"
                 placeholder="Your password"
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                        value: true,
                        message: 'Password is Required'
                    },
                    minLength: {
                        value: 8,
                        message: 'Must be 8 characters or longer'
                    }
                })}
                 />
             <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
             </label>
               
                  </div>
                  {signInError}
            <input className='btn w-full max-w-xs text-white btn-warning' type="submit" value="Login" />
             </form>
             <p><small> Have an account? <Link className='text-primary' to="/login">Please login </Link></small></p>
           <div className="divider">OR</div>
           <button
           onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-warning"
            >Continue with google</button>
  </div>
</div>
</div>
    );
};

export default SignUp;
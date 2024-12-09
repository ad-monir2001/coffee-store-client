import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Navbar from '../components/Navbar';

const SignUp = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    


    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const createdTime = user.metadata.creationTime
        console.log(createdTime)
        setUser(user);
        const newUser = {
          name, email , createdTime
        }

        
        // save new user info to the database with fetch
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      })
      .catch((error) => {
        const errorMessages = error.message;
        setErrorMessage(errorMessages);

      });
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content ">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <h1 className="text-3xl text-center font-bold p-4">Sign Up here</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <p className="text-red-400">{errorMessage ? errorMessage : ''}</p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

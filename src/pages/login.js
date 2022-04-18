import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

export default function Login() {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);
  const isInvalid = password === '' || email === '';

  const handleSubmit = (event) => {};

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iPhone with insta app" />
      </div>
      <div className="flex flex-col w-2/5"></div>
    </div>
  );
}

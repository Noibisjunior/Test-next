import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../Layout';
import SEO from '../components/seo.component';
import { handleLogin, isLoggedIn } from '../../../../utils/auth';
import styles from '../../styles/partials/login.module.scss';

const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [incorrectLogin, setIncorrectLogin] = useState('');

  const handleUpdate = (type) => {
    return (event) => {
      if (type === 'username') {
        setUsername(event.target.value);
      } else {
        setPassword(event.target.value);
      }
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin({
      username,
      password,
      incorrectLogin,
    });

    if (isLoggedIn()) {
      router.push('/clientdashboard/dashboard');
    } else {
      // display error message
      setIncorrectLogin(true);
    }
  };

  return (
    <Layout>
      <div className={styles.Header}>
        <div className={styles.Header__overlay}></div>
        <div className={styles.Header__line}></div>
        <div className={styles.Header__text}>
          <h1 className={styles.Heading__primary}>Login</h1>
        </div>
      </div>
      <div className={styles.Login}>
        <form onSubmit={handleSubmit}>
          <small> Login to view your client portal</small>
          <br />
          <input
            type="text"
            name="username"
            onChange={handleUpdate('username')}
            value={username}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            onChange={handleUpdate('password')}
            value={password}
            placeholder="Password"
          />
          <button>Log in</button>
          {incorrectLogin && <p>That was an incorrect username and password</p>}
        </form>
      </div>
      <SEO title="Login" />
    </Layout>
  );
};

export default Login;

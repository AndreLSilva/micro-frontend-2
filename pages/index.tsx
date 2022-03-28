import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

import Cookies from 'js-cookie';

export default function Home() {
  const [data, setData] = useState<string>();

  function updateCookie() {
    const cookie = new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    
    console.log(Cookies.set("test_share_cookie", cookie, { domain: location.hostname }));
    setData(cookie);
  }

  useEffect(() => {
    setData(Cookies.get("test_share_cookie"));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Store</h1>
      <p>{data}</p>
      <button onClick={updateCookie}>Update Cookies</button>
    </div>
  )
}

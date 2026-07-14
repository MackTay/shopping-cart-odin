import { useState } from 'react';
import { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { Outlet } from "react-router";

function App() {
  const [inventory, setInventory] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products', {
      headers: {
        "User-Agent": "top-practice"
      }
  })
  .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
  })
  .then((response => setInventory(response)))
  .catch((error) => setError(error))
  .finally(() => setLoading(false));;
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  console.log(inventory);
  
  return (
    <>
      <Navbar />
      <main>
        <Outlet context={inventory} />
      </main>
      <footer>
        <span>Some words</span>
        <span>Some more words</span>
      </footer>
    </>
  );
}

export default App

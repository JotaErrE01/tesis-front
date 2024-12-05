import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Toaster } from 'sonner';
import { useEffect } from 'react';
import useAuthStore from './store/auht';


function App() {
  const checkAuth =  useAuthStore(state => state.checkAuth); 
  
  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line
  }, []);

  console.log(import.meta.env.VITE_PAYPAL_CLIENT_ID);

  return (
    <>
      <RouterProvider router={router} />

      <Toaster
        position="top-right"
        richColors
        closeButton
      />
    </>
  )
}

export default App

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate('/OrderSummery');
  };

  return (
    <>
      <div>Home page</div>
      <button onClick={handlePlaceOrder}>Place order</button>
    {/* If we pass the repace: true it will redirect to the chrome home page */}
    </>
  );
};

export default Home;

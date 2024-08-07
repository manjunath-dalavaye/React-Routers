import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSummary: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
    // Navigate back to the previous page
  };

  return (
    <>
      <div>
        Order confirmed <br /> Thank you for your order
      </div>
      <button onClick={handleGoBack}>Go Back</button>
    </>
  );
};

export default OrderSummary;

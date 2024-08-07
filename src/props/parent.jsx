import React from 'react';
import Child from './Child';

const Parent: React.FunctionComponent = () => {
  const message = "Hello from the Parent Component";

  return (
    <div>
      <h1>Parent Component</h1>
      <Child message={message} />
    </div>
  );
};

export default Parent;

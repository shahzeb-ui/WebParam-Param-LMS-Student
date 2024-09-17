import React from 'react';

const Maintenance: React.FC = () => {
  return (
    <div>
      <h1>Maintenance Mode</h1>
      <p>{process.env.NEXT_PUBLIC_DEPLOYMENTMESSAGE}</p>
    </div>
  );
};

export default Maintenance;
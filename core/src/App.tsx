import React, { useState } from 'react';
import MaintenancePage from './components/MaintenancePage';

// You can control maintenance mode with this flag
const MAINTENANCE_MODE = true;

const App: React.FC = () => {
  // You could also fetch the maintenance status from an API
  const [isInMaintenance] = useState<boolean>(MAINTENANCE_MODE);

  if (isInMaintenance) {
    return <MaintenancePage />;
  }

  return (
    <div>
      <h1>Welcome to Your App</h1>
    </div>
  );
};

export default App;
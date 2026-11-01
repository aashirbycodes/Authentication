import { Show } from '@clerk/react';

function Dashboard() {
  return (
    <Show when="signed-in">
      <div>Dashboard</div>
    </Show>
  );
}

export default Dashboard;
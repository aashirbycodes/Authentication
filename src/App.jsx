import './App.css';
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react';

function App() {
  return (
    <div>
      <h1>This is Clerk Authenticate</h1>

      <Show when="signed-out">
        <SignInButton />
        <SignUpButton fallbackRedirectUrl={"dashboard"} forceRedirectUrl={"dashboard"}/>
      </Show>

      <Show when="signed-in">
        <UserButton />
      </Show>
    </div>
  );
}

export default App;

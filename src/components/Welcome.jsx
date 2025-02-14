import { useAuthStore } from "../store/AuthStore";
import "../styles/App.css"; // Your custom styles

const Welcome = () => {
  const { user } = useAuthStore();

  return (
    <div className="welcome-container">
      <h1>Welcome, {user?.name}!</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
};

export default Welcome;

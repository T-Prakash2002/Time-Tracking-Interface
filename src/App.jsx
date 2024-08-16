import "./App.css";
import Navbar from "./components/Navbar";
import { UserCotextProvider } from "./Context/UserCotext";

function App() {
  // console.log("App");
  return (
    <>
      <UserCotextProvider>
        <Navbar />
      </UserCotextProvider>
        
    </>
  );
}

export default App;

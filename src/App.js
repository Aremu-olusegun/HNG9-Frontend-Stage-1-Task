import "./App.css";
import Profile from "./Profile Section";
import LinkSection from "./Link Section";
import SocialSection from "./SocialSection";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Profile />
        <LinkSection />
      </div>
      <SocialSection />
      <Footer />
    </div>
  );
}

export default App;


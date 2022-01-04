import "./App.css";
import Charity from "./Components/Charity";
import CharityPage2 from "./Components/Charity_2";
import Footer from "./Components/Footer";
import Central from "./Components/Central";
import Backvideo from "./Components/Backvideo";
import Slider from "./Components/Slider";

function App() {
  const title = "CHARITIES";
  const desc =
    " 2% of all transaction on our platform will go to the charities,causes and communitites atheletes care about.";
  const image = {
    food: require("./charity_guest.png"),
  };
  // const content = "EMPOWERING ATHLETS FOR LIFE"

  return (
    <div>
      <Backvideo />
      <Central />
      <Slider />
      <Charity title_p={title} description={desc} imagesrc={image} />
      <Footer />
    </div>
  );
}

export default App;

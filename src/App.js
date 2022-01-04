import "./App.css";
import Charity from "./Components/Charity";
import CharityPage2 from "./Components/Charity_2";
import Footer from "./Components/Footer";
import Central from "./Components/Central";
import Backvideo from "./Components/Backvideo";
<<<<<<< HEAD
import Slider from "./Components/Slider";

=======
>>>>>>> parent of ff1b1cf (Slider part)
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
<<<<<<< HEAD
      <Backvideo />
      <Slider />
      <Central />
      <Backvideo />
=======
      <Backvideo/>
>>>>>>> parent of ff1b1cf (Slider part)
      <Charity title_p={title} description={desc} imagesrc={image} />
      <Footer />
    </div>
  );
}

export default App;

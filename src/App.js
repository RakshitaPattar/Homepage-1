import "./App.css";
import Charity from "./Components/Charity";
import CharityPage2 from "./Components/Charity_2";
import Footer from './Components/Footer';
function App() {
  const title = "CHARITIES";
  const desc =
    " 2% of all transaction on our platform will go to the charities,causes and communitites atheletes care about.";
  const image = {
    food: require("./charity_guest.png"),
  };

  return (
    <div>
      <Charity title_p={title} description={desc} imagesrc={image} />
      <p>Git test phrase </p>
      <p>Git test phrase 2</p>
    <>
	<Footer />
	</>
    </div>
  );
}

export default App;

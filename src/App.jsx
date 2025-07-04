import Accordion from "./components/accordion/accordion";
import Count from "./components/count/count";
import Timer from "./components/timer/timer";
import StarRating from "./components/star-rating/star-rating";

const App = () => {
  return (
    <>
      <h1>UI Components</h1>
      <Count />
      <Accordion />
      <Timer />
      <StarRating />
    </>
  );
};

export default App;

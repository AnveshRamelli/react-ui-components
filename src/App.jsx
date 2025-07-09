import Accordion from "./components/accordion/accordion";
import Count from "./components/count/count";
import Timer from "./components/timer/timer";
import StarRating from "./components/star-rating/star-rating";
import GithubProfileFinder from "./components/github-profile-finder/github-profile-filder";

const App = () => {
  return (
    <>
      <h1>UI Components</h1>
      <Count />
      <Accordion />
      <Timer />
      <StarRating />
      <GithubProfileFinder/>
    </>
  );
};

export default App;

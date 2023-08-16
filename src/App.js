import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";

function App() {
  return (
    <div>
      <Header />
      <Body />
      {/**
       * Header
       * Body
          MainContainer
            MovieContainer
              MovieCards
                Title
                Rating
                Description
          MovieInfo(Routing)
       **/}
    </div>
  );
}

export default App;

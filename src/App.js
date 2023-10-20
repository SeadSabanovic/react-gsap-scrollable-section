import "./App.scss";
import ScrollableSection from "./ScrollableSection";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>React + GSAP</h1>
          <h3>Scrollable Section</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            repellat consequatur iure iusto maxime enim eligendi, unde deserunt.
            Minima nesciunt <span>voluptatem quasi accusantium</span> maiores
            perferendis optio veniam nihil vitae ut!
          </p>
          <p>
            Lorem ipsum <span>dolor sit amet consectetur</span> adipisicing
            elit. Illo repellat consequatur iure iusto maxime enim eligendi,
            unde deserunt. Minima nesciunt voluptatem quasi accusantium maiores
            perferendis optio veniam nihil vitae ut!
          </p>
        </div>
      </div>
      <ScrollableSection />
      <div className="container">
        <div className="header">
          <h1>React + GSAP</h1>
          <h3>Scrollable Section</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            repellat consequatur iure iusto maxime enim eligendi, unde deserunt.
            Minima nesciunt <span>voluptatem quasi accusantium</span> maiores
            perferendis optio veniam nihil vitae ut!
          </p>
          <p>
            Lorem ipsum <span>dolor sit amet consectetur</span> adipisicing
            elit. Illo repellat consequatur iure iusto maxime enim eligendi,
            unde deserunt. Minima nesciunt voluptatem quasi accusantium maiores
            perferendis optio veniam nihil vitae ut!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

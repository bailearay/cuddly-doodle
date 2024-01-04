import "./App.css";
import { About } from "./components/About";
import { Cover } from "./components/Cover";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App scroller">
      <section>
        <Cover />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}

export default App;

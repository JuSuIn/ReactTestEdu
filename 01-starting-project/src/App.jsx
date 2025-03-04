import { useState } from "react";

import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setselectedTopic] = useState("Please click a button");
  let tabContent = "Please click a button";

  function handleSelect(selectedButton) {
    //selectedButton => ''Components' or 'JSX' or 'Props' or 'State'
    setselectedTopic(selectedButton);
    console.log(selectedTopic);
    console.log(selectedButton);
  }

  console.log("APP COMPONENT EXECUTING");

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* 1 component */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* 2~4 component ,spread  grammar */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
            {/* <TabButton label="Components" /> */}
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;

// function Header() {
//   return (
//     <header>
//       <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
//       <h1>React Essentials</h1>
//       <p>
//         Fundamental React concepts you will need for almost any app you are
//         going to build!
//       </p>
//     </header>
//   );
// }

// Header();

// function App() {
//   return (
//     <div>
//       <Header />
//       <header>
//         <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
//         <h1>React Essentials</h1>
//         <p>
//           Fundamental React concepts you will need for almost any app you are
//           going to build!
//         </p>
//       </header>
//       <main>
//         <h2>Time to get started!</h2>
//       </main>
//     </div>
//   );
// }

// export default App;

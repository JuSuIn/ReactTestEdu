import CoreConceptItem from "./CoreConceptItem.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcept({ image, title, description }) {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConceptItem key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}

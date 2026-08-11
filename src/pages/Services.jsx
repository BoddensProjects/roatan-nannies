import PageHero from "../components/PageHero.jsx";
import { serviceCards } from "../data.js";

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="About The Service"
        title="Childcare that travels to your family's stay."
        text="Roatan Nannies serves local and visiting families across the island, giving parents room to enjoy plans with peace of mind."
      >
        <p>Diving, snorkeling, dinner plans; we've got the kids covered.</p>
      </PageHero>

      <section className="section two-column">
        <div>
          <p className="eyebrow">What We Do</p>
          <h2>Reliable care without moving your family around.</h2>
          <p>
            We come to the place where your family is already comfortable. Share your child's age,
            needs, allergies, medical notes, and schedule, and the team prepares accordingly.
          </p>
        </div>
        <div className="feature-grid">
          {serviceCards.map((card) => (
            <article key={card.title}>
              <span>{card.number}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

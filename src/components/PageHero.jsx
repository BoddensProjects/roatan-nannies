export default function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {text ? <p className="lead">{text}</p> : null}
      </div>
      {children ? <div className="page-hero-panel">{children}</div> : null}
    </section>
  );
}

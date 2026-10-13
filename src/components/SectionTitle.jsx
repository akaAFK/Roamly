export default function SectionTitle({ kicker, title, description, action, align = 'left' }) {
  return (
    <div className={`section-title section-title-${align}`}>
      <div className="section-title-copy">
        {kicker && <span className="eyebrow">{kicker}</span>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {action && <div className="section-title-action">{action}</div>}
    </div>
  );
}

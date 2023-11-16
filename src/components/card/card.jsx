import "./card.css";

export function Card({ src, alt, name, handleClick }) {
  return (
    <div className="card">
      <img
        src={src}
        alt={alt}
        data-name={name}
        onClick={(e) => {
          handleClick.handleScore(e);
          handleClick.shufflePokemonCards();
        }}
      />
      <p>{name[0].toUpperCase() + name.slice(1)}</p>
    </div>
  );
}

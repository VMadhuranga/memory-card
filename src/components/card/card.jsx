import "./card.css";

export function Card({ src, alt, name, handleClick }) {
  return (
    <div className="card">
      <img
        src={src}
        alt={alt}
        width={"200px"}
        height={"200px"}
        data-name={name}
        onClick={(e) => {
          handleClick.handleScore(e);
          handleClick.shufflePokemonCards();
        }}
        loading="lazy"
      />
      <p>{name[0].toUpperCase() + name.slice(1)}</p>
    </div>
  );
}

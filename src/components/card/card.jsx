export function Card({ src, alt, name, handleClick }) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        width={"200px"}
        height={"200px"}
        data-name={name}
        onClick={handleClick}
      />
      <p>{name}</p>
    </div>
  );
}

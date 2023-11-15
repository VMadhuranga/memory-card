export function Card({ src, alt, name }) {
  return (
    <div>
      <img src={src} alt={alt} />
      <p>{name}</p>
    </div>
  );
}

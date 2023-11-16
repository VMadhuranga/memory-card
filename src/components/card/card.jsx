export function Card({ src, alt, name }) {
  return (
    <div>
      <img src={src} alt={alt} width={"200px"} height={"200px"} />
      <p>{name}</p>
    </div>
  );
}

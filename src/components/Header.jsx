import trollface from "../assets/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={trollface} alt="photo" className="header-image" />
      <h2 className="header-title">Meme Generator</h2>
    </header>
  );
}

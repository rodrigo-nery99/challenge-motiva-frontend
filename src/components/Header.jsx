import logo from "../assets/logo-motiva.png";

function Header({ titulo, subtitulo }) {
  return (
    <header className="header">
      <div className="header-conteudo">
        <img src={logo} alt="Motiva Rodovias" className="header-logo" />
        <div className="header-textos">
          <h1>{titulo}</h1>
          <p>{subtitulo}</p>
        </div>
      </div>
    </header>
  );
}
export default Header;
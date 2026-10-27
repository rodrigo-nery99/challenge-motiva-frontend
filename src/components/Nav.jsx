const abas = [
  { id: "inicio", rotulo: "Início" },
  { id: "consultas", rotulo: "Consultas" },
  { id: "interacoes", rotulo: "Interações" },  
];

function Nav ({ telaAtual, onTrocarTela }) {
  return (
    <nav className="nav">
      {abas.map((aba) => (
        <button
          key={aba.id}
          className={telaAtual === aba.id ? "ativo" : ""}
          onClick={() => onTrocarTela(aba.id)}
        >
          {aba.rotulo}
        </button>     
      ))}  
    </nav>
  );  
}
export default Nav;
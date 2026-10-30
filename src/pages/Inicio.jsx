function Inicio({ onTrocarTela }) {
  return (
    <section>
      <div className="card destaque">
        <h2>Bem-vindo ao Motiva Campo</h2>

        <p>
          O projeto busca identificar e solucionar desafios
          relacionados à mobilidade e à infraestrutura de transportes,
          contribuindo para melhorar a eficiência, a segurança e a
          qualidade dos serviços oferecidos aos usuários.
        </p>

        <p>
          O usuário é representado pelas pessoas que utilizam as
          rodovias e os sistemas de transporte administrados pela
          Motiva, que precisam de serviços seguros, acessíveis,
          eficientes e de qualidade durante seus deslocamentos.
        </p>
      </div>

      <h3 className="titulo-secao">Acesso rápido</h3>
      <div className="lista">
        <button className="card atalho" onClick={() => onTrocarTela("consultas")}>
          <span className="atalho-icone">🛣️</span>
          <strong>Consultas</strong>
          <span>Veja a situação de cada trecho da rodovia.</span>
        </button>

        <button className="card atalho" onClick={() => onTrocarTela("interacoes")}>
          <span className="atalho-icone">🎙️</span>
          <strong>Interações</strong>
          <span>Confira o histórico de comandos de voz.</span>
        </button>
      </div>
    </section>
  );
}

export default Inicio;
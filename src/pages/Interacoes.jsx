import interacoes from "../data/interacoes";
import CardInteracao from "../components/CardInteracao";
 
function Interacoes() {
  return (
    <section>
      <h2>Histórico de interações</h2>
      <div className="lista">
        {interacoes.map((interacao) => (
          <CardInteracao
            key={interacao.id}
            comando={interacao.comando}
            data={interacao.data}
            resposta={interacao.resposta}
          />
        ))}
      </div>
    </section>
  );
}
 
export default Interacoes;
import trechos from "../data/trechos";
import CardTrecho from "../components/CardTrecho";
 
function Consultas() {
  return (
    <section>
      <h2>Consultas de trechos</h2>
      <div className="lista">
        {trechos.map((trecho) => (
          <CardTrecho
            key={trecho.id}
            rodovia={trecho.rodovia}
            kmInicial={trecho.kmInicial}
            kmFinal={trecho.kmFinal}
            nome={trecho.nome}
            status={trecho.status}
            observacao={trecho.observacao}
          />
        ))}
      </div>
    </section>
  );
}
export default Consultas;
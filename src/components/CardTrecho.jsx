// Dicionario: traduz o status (com acento) para a classe CSS (sem acento)
const classeStatus = {
  "Normal": "status-normal",
  "Atenção": "status-atencao",
  "Crítico": "status-critico",
};

function CardTrecho({ rodovia, kmInicial, kmFinal, nome, status, observacao }) {
  return (
    <article className={`card card-trecho borda-${classeStatus[status]}`}>
      <div className="card-topo">
        <h3>{nome}</h3>
        <span className={`status ${classeStatus[status]}`}>{status}</span>
      </div>
      <p className="card-local">
        <strong>{rodovia}</strong> · km {kmInicial} ao {kmFinal}
      </p>
      <p>{observacao}</p>
    </article>
  );
}
export default CardTrecho;
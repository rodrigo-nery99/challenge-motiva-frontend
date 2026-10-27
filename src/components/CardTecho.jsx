function CardTecho({ rodovia, kmInicial, kmFinal, nome, status, observacao }) {
  return (
    <article className="card">
      <h3>{nome}</h3>
      <p><strong>{rodovia}</strong> . km {kmInicial} ao {kmFinal}</p>
      <span className={`status status-${status.toLowerCase()}`}>{status}</span>
      <p>{observacao}</p>
    </article> 
  );  
}
export default CardTecho;
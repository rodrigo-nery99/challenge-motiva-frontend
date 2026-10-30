import { formatarData } from "../utils/formatarData";

function CardInteracao({ comando, data, resposta }) {
  return (
    <article className="card">
      <p className="comando">🎙️ "{comando}"</p>
      <small>{formatarData(data)}</small>
      <p className="resposta">🤖 {resposta}</p>
    </article>
  )  ;
}
export default CardInteracao;
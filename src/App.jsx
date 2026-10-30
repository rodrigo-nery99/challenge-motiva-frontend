import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Inicio from "./pages/Inicio";
import Consultas from "./pages/Consultas";
import Interacoes from "./pages/Interacoes";

function App() {
  const [telaAtual, setTelaAtual] = useState("inicio");

  return (
    <>
      <Header titulo="Motiva Campo" subtitulo="Apoio ao profissional de campo" />
      <Nav telaAtual={telaAtual} onTrocarTela={setTelaAtual} />
      <main>
        {telaAtual === "inicio" && <Inicio onTrocarTela={setTelaAtual} />}
        {telaAtual === "consultas" && <Consultas />}
        {telaAtual === "interacoes" && <Interacoes />}
      </main>
    </>
  );
}

export default App;

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <div>
        <Link to="/login">Iniciar Sesión</Link>
      </div>
    </div>
  );
}

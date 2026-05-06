// Importar o Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// Importar componentes
import Formulario from "./components/formulario/Formulario";
import Tabela from "./components/tabela/Tabela";

// Hook useEffect
import { useEffect } from "react";

// Componente
function App(){

	// Hook useEffect
	useEffect(() => {
		fetch("http://localhost:8080/selecionar").then(response => response.json()).then(pessoas => console.table(pessoas));
	}, []);
	// Render
	return(
		<>
			<Formulario/>
			<Tabela/>
		</>
	);
}

// Exportar
export default App;
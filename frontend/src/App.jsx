// Importar o Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// Importar componentes
import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela";

// Componente
function App(){
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
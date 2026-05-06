// Importar o Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// Importar componentes
import Formulario from "./components/formulario/Formulario";
import Tabela from "./components/tabela/Tabela";

// Hook useEffect e useState
import { useEffect, useState } from "react";

// Componente
function App(){

	// Hook useState
	const[pessoas, setPessoas] = useState([]);
	const[botaoCadastrar, setBotaoCadastrar] = useState(true);
	const[pessoa, setPessoa] = useState({id:null, nome:"", cidade:""});

	// Hook useEffect
	useEffect(() => {
		fetch("http://localhost:8080/selecionar").then(response => response.json()).then(pessoas => setPessoas(pessoas));
	}, []);

	// Atualizar objeto pessoa
	const atualizarPessoa = (e) => {
		const {name, value} = e.target;
		setPessoa({...pessoa, [name]:value})
	}

	// Render
	return(
		<>
			<Formulario botao={botaoCadastrar} pessoa={pessoa} atualizarPessoa={atualizarPessoa}/>
			<Tabela registros={pessoas}/>
		</>
	);
}

// Exportar
export default App;
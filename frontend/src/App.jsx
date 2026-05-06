// Importar componentes
import Formulario from "./components/formulario/Formulario";
import Tabela from "./components/tabela/Tabela";

// Hook useEffect e useState
import { useEffect, useState } from "react";

// Importar funções da camada de serviço
import { alterarPessoa, cadastrarPessoa, listarPessoas, removerPessoa } from "./service/pessoaService";

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

	// Cadastrar
	const cadastrar = () => {
		fetch("http://localhost:8080/cadastrar", {
			method:"POST",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify(pessoa)
		}).then(retorno => retorno.json()).then(p => {
			setPessoas(vetor => [...vetor, p]);
			setPessoa({id:null, nome:"", cidade:""});
		})
	}

	// Selecionar pessoa específica
	const selecionarPessoa = (indice) => {
		setPessoa(pessoas[indice]);
		setBotaoCadastrar(false);
	}

	// Cancelar
	const cancelar = () => {
		setPessoa({id:null, nome:"", cidade:""});
		setBotaoCadastrar(true);
	}

	// Aterar
	const alterar = () => {
		fetch("http://localhost:8080/alterar/" + pessoa.id, {
			method:"PUT",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify(pessoa)
		}).then(retorno => retorno.json()).then(p => {
			setPessoas(pessoas.map(pessoa => pessoa.i === p.id ? p : pessoa));
			cancelar();
		})
	}

	// Remover
	const remover = () => {
		fetch("http://localhost:8080/remover/" + pessoa.id, {
			method:"DELETE"
		}).then(() => {
			setPessoas(pessoas.filter(p => p.id !== pessoa.id));
			cancelar();
		})
	}

	// Render
	return(
		<>
			<Formulario 
				botao={botaoCadastrar}
				atualizarPessoa={atualizarPessoa}
				cadastrar={cadastrar}
				cancelar={cancelar}
				alterar={alterar}
				remover={remover}
				pessoa={pessoa}
				
			/>
			<Tabela registros={pessoas} funcao={selecionarPessoa}/>
		</>
	);
}

// Exportar
export default App;
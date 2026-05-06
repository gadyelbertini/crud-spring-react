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

	useEffect(() => {
		const fetchPessoas = async () => {
			const dados = await listarPessoas();
			setPessoas(dados);
		};

		fetchPessoas();
	}, []);

	// Atualizar objeto pessoa
	const atualizarPessoa = (e) => {
		const {name, value, files, type } = e.target;

		if (type === "file") {
			// Salva o arquivo e o preview
			setPessoa({...pessoa, [name]: files[0], preview: URL.createObjectURL(files[0])});
		} else {
			setPessoa({...pessoa, [name]: value});
		}
	}

	// Cadastrar
	const cadastrar = async () => {
		const novaPessoa = await cadastrarPessoa(pessoa);
		setPessoas([...pessoas, novaPessoa]);
		setPessoa({imagem: null, nome: "", cidade: ""});
	}

	// Selelcionar pessoa específica
	const selecionarPessoa = (indice) => {
		setPessoa(pessoa[indice]);
		setBotaoCadastrar(false);
	}

	// Cancelar
	const cancelar = () => {
		setPessoa({imagem: null, nome: "", cidade: ""});
		setBotaoCadastrar(true);
	}

	// Alterar
	const alterar = async () => {
		const atualizado = await alterarPessoa(pessoa.id, pessoa);
		setPessoas(pessoas.map(pessoa => (pessoa.id === atualizado.id ? atualizado : pessoa)));
		cancelar();
	}

	// Remover
	const remover = async () => {
		await removerPessoa(pessoa.id);
		setPessoas(pessoas.filter(p => p.id !== pessoa.id));
		cancelar();
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
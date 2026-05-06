// Importar o CSS
import "./Formulario.css";

// Componente
function Formulario({botao, pessoa, atualizarPessoa}){
	// Render
	return(
		<form>
			<h1>{JSON.stringify(pessoa)}</h1>
			<input type="number" onChange={atualizarPessoa} name="id" placeholder="Código" className="form-control" readOnly/>
			<input type="text" onChange={atualizarPessoa} name="nome" placeholder="Nome" className="form-control"/>
			<input type="text" onChange={atualizarPessoa} name="cidade" placeholder="Cidade" className="form-control"/>

			{
				botao
				?
				<input type="button" value="Cadastrar" className="btn btn-primary"/>
				:
				<>
					<input type="button" value="Alterar" className="btn btn-primary"/>
					<input type="button" value="Remover" className="btn btn-primary"/>
					<input type="button" value="Cancelar" className="btn btn-primary"/>
				</>
			}
			
			
		</form>
	);
}

// Exportar
export default Formulario;
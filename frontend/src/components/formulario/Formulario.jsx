// Importar o CSS
import "./Formulario.css";

// Componente
function Formulario(){
	// Render
	return(
		<form>
			<input type="number" placeholder="Código" className="form-control" readOnly/>
			<input type="text" placeholder="Nome" className="form-control"/>
			<input type="text" placeholder="Cidade" className="form-control"/>

			<input type="button" value="Cadastrar" className="btn btn-primary"/>
			<input type="button" value="Alterar" className="btn btn-primary"/>
			<input type="button" value="Remover" className="btn btn-primary"/>
			<input type="button" value="Cancelar" className="btn btn-primary"/>
		</form>
	);
}

// Exportar
export default Formulario;
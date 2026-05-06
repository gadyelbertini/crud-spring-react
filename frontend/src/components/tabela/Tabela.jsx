// Importar o CSS
import "./Tabela.css";

// Componente
function Tabela(){
	// Render
	return(
		<table className="table">
			<thead>
				<tr>
					<th>#</th>
					<th>Nome</th>
					<th>Cidade</th>
					<th>Selecionar</th>
				</tr>
			</thead>
			<tbody>

			</tbody>
		</table>
	);
}

// Exportar
export default Tabela;
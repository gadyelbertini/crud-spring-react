// Componente
function Tabela({registros, funcao}){
	// Render
	return(
		<table className="table table-striped">
			<thead>
				<tr>
					<th>#</th>
					<th>Nome</th>
					<th>Cidade</th>
					<th>Selecionar</th>
				</tr>
			</thead>
			<tbody>
				{
					registros.map((pessoa, indice) => (
						<tr key={indice}>
							<td>{indice+1}</td>
							<td>{pessoa.nome}</td>
							<td>{pessoa.cidade}</td>
							<td><button onClick={() => funcao(indice)} className="btn btn-primary">Selecionar</button></td>
						</tr>
					))
				}
			</tbody>
		</table>
	);
}

// Exportar
export default Tabela;
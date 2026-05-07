// Importar componentes do MaterialUI
import { Card, CardActions, CardContent, CardMedia, Grid, Typography, Button } from "@mui/material";

// Componente
function GridPessoas({registros, funcao}){
	// Render
	return(  
		// Estrutura para gerar um grid
		<Grid container spacing={2}>
			{
				// Listar os dado contidos no vetor de registros
				registros.map((obj, indice) => (
					// Especificar a quantidade de elementos por linha
					<Grid size={{ xs:12, sm: 6, md: 4 }} key={obj.id}>
						{/* Card para exibir cada registro */}
						<Card>
							{/* Exibir imagem */}
							<CardMedia
								component="img"
								height="200"
								image={`http://localhost:8080/imagem/${obj.id}`}
								alt={`Imagem de ${obj.nome}`}
								sx={{ objectFit: "contain", backgroundColor: "#f0f0f0", padding2:2 }}
							/>

							{/* Conteúdo do card -nome, cidade e botão de seleção */}
							<CardContent sx={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
								<Typography variant="h6">
									{obj.nome}
								</Typography>

								<Typography variant="body2" color="text.secondary">
									{obj.cidade}
								</Typography>

								<CardActions>
									<Button
										size="small"
										variant="contained"
										onClick={() => funcao(indice)}
									>
										Selecionar
									</Button>
								</CardActions>
							</CardContent>
						</Card>
					</Grid>
				)) 
			}

		</Grid>
	);
}

// Exportar
export default GridPessoas;
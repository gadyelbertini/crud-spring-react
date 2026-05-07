// Importar componentes do MaterialUI
import { Box, TextField, Button, Stack, CardMedia } from "@mui/material";

// Componente
function Formulario({botao, atualizarPessoa, cadastrar, cancelar, alterar, remover, pessoa}){
	// Render
	return(
		// Estrutura formulário
		<Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 700, margin: "0 auto" }}>
			{/* Exibe a imagem da pessoa selecionada */}
			{pessoa.id && (
				<CardMedia
					component="img"
					src={`http://localhost:8080/imagem/${pessoa}`}
					alt="Imagem da pessoa"
					sx={{ width: 200, height: 200, objectFit: "cover", borderRadius: 2, margin: "0 auto" }}
				/>
			)}

			{/* Preview da imagem que acabou de ser enviada */}
			{pessoa.imagem && typeof pessoa.imagem !== "string" && (
				<CardMedia
					component="img"
					src={URL.createObjectURL(pessoa.imagem)}
					alt="Preview da pessoa"
					sx={{ width: 200, height: 200, objectFit: "cover", borderRadius: 2, margin: "0 auto" }}
				/>
			)}

			{/* Campos */}
			<TextField label="Nome" name="nome" value={pessoa.nome} onChange={atualizarPessoa} variant="outlined"/>
			<TextField label="Cidade" name="cidade" value={pessoa.cidade} onChange={atualizarPessoa} variant="outlined"/>

			{/* Botão para upload da imagem (disponível apenas ao cadastrar) */}
			{botao && (
				<Button variant="outlined" component="label" sx={{ heigt: 56 }}>
					Selecionar Imagem
					<input type="file" hidden onChange={atualizarPessoa} name="imagem" accept="image/png, image/jpeg"/>
				</Button>
			)}

			{/* Demais botões (cadastrar, alterar, remover, cancelar) */}
			<Stack direction="row" spacing={2} justfyContent="center" marginBottom={5}>
				{botao ? (
					<Button variant="contained" color="primary" onClick={cadastrar}>Cadastrar</Button>
				): (
					<>
						<Button variant="contained" color="primary" onClick={alterar}>Alterar</Button>
						<Button variant="contained" color="error" onClick={remover}>Remover</Button>
						<Button variant="contained" color="secondary" onClick={cancelar}>Cancelar</Button>
					</>
				)}
			</Stack>
		</Box>
	);
}

// Exportar
export default Formulario;
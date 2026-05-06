// Importar api.js
import api from "./api";

// Listar pessoas
export const listarPessoas = async () => {
	const { data } = await api.get("/selecionar");
	return data;
};

// Cadastrar pessoas
export const cadastrarPessoa = async (pessoa) => {
	const formData = new FormData();
	formData.append("nome", pessoa.nome);
	formData.append("cidade", pessoa.cidade);
	formData.append("imagem", pessoa.imagem);

	const { data } = await api.post("/cadastrar", formData);
	return data;
};

// Alterar pessoa
export const alterarPessoa = async (id, pessoa) => {
	const { data } = await api.put(`/alterar/${id}`, pessoa);
	return data;
};

// Remover pessoa
export const removerPessoa = async (id) => {
	await api.delete(`/remover/${id}`);
};
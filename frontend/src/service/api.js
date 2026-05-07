//Importar Axios
import axios from "axios";

// Criar uma referência para acessar a API
const api = axios.create({
	baseURL:"http://localhost:8080",
	timeout: 5000
});

// Interceptor de resposta
api.interceptors.response.use(
	response => response, // se a resposta for 2xx, retorna normalmente
	error => {
		// Obter a mensagem do backend (se existir)
		const mensagem = error.response?.data?.mensagem || error.response?.data || "Erro dsconhecido";

		// Exibe alert automático
		alert(`Erro na requisição\nCódigo: ${error.response?.status}\nMensagem: ${mensagem}`);

		// Relança o erro para não "engolir" a exceção
		return Promise.reject(error);
	}
);

// Exportar módulo
export default api;
package br.com.api.pessoa.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import br.com.api.pessoa.model.Pessoa;
import br.com.api.pessoa.repository.PessoaRepository;

public class PessoaService {
	
	// Referência do repositório
	private final PessoaRepository repository;

	// Construtor
	public PessoaService(PessoaRepository repository){
		this.repository = repository;
	};

	// Listar todas as pessoas
	public Iterable<Pessoa> selecionar(){
		return repository.findAll();
	}

	// Cadastrar pessoas
	public Pessoa cadastrar(String nome, String cidade, MultipartFile imagem) throws IOException{
		// Validar dados
		if (nome == null || nome.isEmpty()) {
			throw new IllegalArgumentException("O nome é obrigatório!");
		}
		if (cidade == null || cidade.isEmpty()) {
			throw new IllegalArgumentException("A cidade é obrigatória!");
		}
		if (imagem == null || imagem.isEmpty()) {
			throw new IllegalArgumentException("A imagem é obrigatória!");
		}

		// Criar um objeto do tipo Pessoa
		Pessoa p = new Pessoa();
		p.setNome(nome);
		p.setCidade(cidade);
		p.setImagem(imagem.getBytes());
		p.setExtensao(imagem.getContentType());

		// Retorno
		return repository.save(p);
	}

	// Alterar pessoas
	public Pessoa alterar(Integer id, Pessoa p){
		// Validar dados
		if (p.getNome() == null || p.getNome().isEmpty()) {
			throw new IllegalArgumentException("O nome é obrigatório!");
		}
		if (p.getCidade() == null || p.getCidade().isEmpty()) {
			throw new IllegalArgumentException("A cidade é obrigatória!");
		}

		// Atribuir o id no objeto p
		p.setId(id);

		// Obter os dados atuais da pessoa contida na tabela
		Pessoa pessoa = repository.findById(id).orElseThrow(() -> new IllegalArgumentException("Pessoa não encontrada!"));

		// Extrair a imagem e a extensão para o objeto p
		p.setImagem(pessoa.getImagem());
		p.setExtensao(pessoa.getExtensao());

		return repository.save(p);
	}

	// Remover pessoas
	public void remover(Integer id){
		// Verificar a existência da pessoa com o id informado
		repository.findById(id).orElseThrow(() -> new IllegalArgumentException("Pessoa não encontrada!"));

		// Efeturar a remoção
		repository.deleteById(id);
	}
}

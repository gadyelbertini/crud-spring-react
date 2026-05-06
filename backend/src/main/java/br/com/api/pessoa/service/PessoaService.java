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
}

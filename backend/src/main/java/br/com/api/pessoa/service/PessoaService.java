package br.com.api.pessoa.service;

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
}

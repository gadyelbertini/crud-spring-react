package br.com.api.pessoa.service;

import br.com.api.pessoa.repository.PessoaRepository;

public class PessoaService {
	
	// Referência do repositório
	private final PessoaRepository repository;

	// Construtor
	public PessoaService(PessoaRepository repository){
		this.repository = repository;
	};
}

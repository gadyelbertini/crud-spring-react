package br.com.api.pessoa.controller;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.pessoa.service.PessoaService;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(value = "*")
@RestController
public class PessoaController {
	// Referenciar PassoaServico
	private final PessoaService servico;

	// Construtor
	public PessoaController(PessoaService servico){
		this.servico = servico;
	}
}
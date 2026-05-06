package br.com.api.pessoa.controller;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.pessoa.model.Pessoa;
import br.com.api.pessoa.service.PessoaService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin(value = "*")
@RestController
public class PessoaController {
	// Referenciar PassoaServico
	private final PessoaService servico;

	// Construtor
	public PessoaController(PessoaService servico){
		this.servico = servico;
	}

	// Rota para listar todas as pessoas
	@GetMapping("/selecionar")
	public ResponseEntity<Iterable<Pessoa>> selecionar() {
		return ResponseEntity.ok(servico.selecionar());
	}
}
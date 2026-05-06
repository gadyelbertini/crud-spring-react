package br.com.api.pessoa.controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.api.pessoa.model.Pessoa;
import br.com.api.pessoa.service.PessoaService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;



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

	// Rota para cadastrar pessoas
	@PostMapping("/cadastrar")
	public ResponseEntity<?> cadastrar(
		@RequestParam("nome") String nome,
		@RequestParam("cidade") String cidade,
		@RequestParam("imagem") MultipartFile imagem
	) {
		try{
			Pessoa p = servico.cadastrar(nome, cidade, imagem);
			return ResponseEntity.status(201).body(p);
		}catch(Exception e){
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}
	
	// Rota para alterar pessoas
	@PutMapping("/alterar/{id}")
	public ResponseEntity<?> alterar(@PathVariable Integer id, @RequestBody Pessoa p) {
		try{
			Pessoa pessoa = servico.alterar(id, p);
			return ResponseEntity.ok(pessoa);
		}catch(Exception e){
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}
}
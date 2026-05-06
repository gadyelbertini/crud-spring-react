package br.com.api.pessoa.controller;

import org.springframework.web.bind.annotation.RestController;

import br.com.api.pessoa.model.Pessoa;
import br.com.api.pessoa.repository.PessoaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin(value = "*")
@RestController
public class PessoaController {

	// Referenciar repositório
	@Autowired
	private PessoaRepository repository;
	
	// Rota para retornar um Hello World!
	@GetMapping("/")
	public String helloWorld() {
		return "Hello World!";
	}
	
	// Rota para cadastrar
	@PostMapping("/cadastrar")
	public Pessoa cadastrar(@RequestBody Pessoa p) {
		return repository.save(p);
	}

	// Rota para selecionar
	@GetMapping("/selecionar")
	public Iterable<Pessoa> selecionar(){
		return repository.findAll();
	}

	// Rota para alterar
	@PutMapping("/alterar/{id}")
	public Pessoa alterar(@PathVariable Integer id, @RequestBody Pessoa p) {
		p.setId(id);
		return repository.save(p);
	}

	// Rota para remover
	@DeleteMapping("/remover/{id}")
	public void remover(@PathVariable Integer id){
		repository.deleteById(id);
	}
}
package br.com.api.pessoa.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class PessoaController {
	
	@GetMapping("/")
	public String helloWorld() {
		return "Hello World!";
	}
	
}
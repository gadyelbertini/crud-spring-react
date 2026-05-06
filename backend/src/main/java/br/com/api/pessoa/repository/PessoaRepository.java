package br.com.api.pessoa.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.pessoa.model.Pessoa;

@Repository
public interface PessoaRepository extends CrudRepository<Pessoa, Integer>{

}

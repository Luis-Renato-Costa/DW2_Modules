import Pessoa from './modules/pessoa.class.js' //Nome diferente da classe
import{
    //nome dos métodos iguais, podendo utilizar alias
    imprimirNomePessoa as nomePessoa,
    imprimirIdadePessoa as idadePessoa
} from './modules/pessoa.class.js'
const pessoa = new Pessoa('John', 35)
nomePessoa(pessoa)
idadePessoa(pessoa)
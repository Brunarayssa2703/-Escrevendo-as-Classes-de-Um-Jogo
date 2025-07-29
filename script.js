// Classe que representa um herói com nome, idade e tipo
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    // Define o tipo de ataque com base no tipo do herói
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque indefinido";
    }

    // Exibe a mensagem do ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando heróis com diferentes tipos
const heroi1 = new Heroi("Arus", 30, "mago");
const heroi2 = new Heroi("Brock", 35, "guerreiro");
const heroi3 = new Heroi("Lee", 28, "monge");
const heroi4 = new Heroi("Kira", 25, "ninja");

// Chamando o método atacar()
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  // para ler a variavel abaixo - ver component.html
  nome = 'Rosangela Freitas Ferreira Cardoso';
  // two e data base
  text = '';


  pessoas = [
    {
      nome: "Rosangela",
      profissao: "Desenvolvedora Fron-End"
    },
    {
      nome: "Messias",
      profissao: "Desenvolvedor Fron-End"
    },
    {
      nome: "Ellen",
      profissao: "Médica"
    },
    {
      nome: "Gabriel",
      profissao: "Engenheiro Químico"
    }
  ];

  constructor() {

  }

  ngOnInit() {
    console.log(this.pessoas);
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        clearInterval(interval);
      }
    }, 1000)
  }

  // para passar informações do html para a logica 

  clicou(nome: string): void{
    console.log('clicou em min', nome)
  }
}

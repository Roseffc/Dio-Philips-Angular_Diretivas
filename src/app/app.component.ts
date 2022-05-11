import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

export interface Pessoa {
  name: string;
  profission: string;
  age: number
}


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

  pessoas: Pessoa[] = [];

  constructor(private peopleService: PeopleService) {

  }

  ngOnInit() {
      // console.log(this.pessoas);
      this.getPeople();
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

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }
}

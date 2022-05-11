import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        name: 'Rosangela Freitas',
        profission: 'Desenvolvedora Front-End',
        age: 41
      },
      {
        name: 'Messias Gonçalves',
        profission: 'Desenvolvedor Fron-End',
        age: 44
      },
      {
        name: 'Ellen Ferreira',
        profission: 'Médica',
        age: 24
      },
      {
        name: 'Gabriel Ferreira',
        profission: 'Engenheiro Químico',
        age: 21
      }
    ]

    return of(peopleArray)

  }
}

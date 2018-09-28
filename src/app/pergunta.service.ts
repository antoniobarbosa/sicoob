import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {
  perguntas = [
    {
      id: 0,
      resposta: true
    },
    {
      id: 1,
      resposta: true
    }, {
      id: 2,
      resposta: false
    }, {
      id: 3,
      resposta: false
    }, {
      id: 4,
      resposta: true
    }, {
      id: 5,
      resposta: true
    }, {
      id: 6,
      resposta: true
    }, {
      id: 7,
      resposta: true
    }, {
      id: 8,
      resposta: true
    }, {
      id: 9,
      resposta: true
    }, {
      id: 10,
      resposta: true
    }, {
      id: 11,
      resposta: true
    }, {
      id: 12,
      resposta: true
    }, {
      id: 13,
      resposta: true
    }


  ]
  constructor() { }
  getPerguntas() {
    return this.perguntas;
  }
}

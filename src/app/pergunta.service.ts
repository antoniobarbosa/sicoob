import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {
perguntas = [
   {
     id: 0,
     resposta: true
   },{
     id: 1,
     resposta: false
   }, {
     id: 2,
     resposta: false
   }, {
     id: 3,
     resposta: false
   }, {
     id: 4,
     resposta: false
   }, {
     id: 5,
     resposta: false
   }, {
     id: 6,
     resposta: false
   }, {
     id: 7,
     resposta: false
   }, {
     id: 8,
     resposta: true
   }, {
     id: 9,
     resposta: false
   }, {
     id: 10,
     resposta: true
   }, {
     id: 11,
     resposta: false
   }, {
     id: 12,
     resposta: true
   }, {
     id: 13,
     resposta: false
   }, {
     id: 14,
     resposta: false
   }, {
     id: 15,
     resposta: false
   }, {
     id: 16,
     resposta: true
   }, {
     id: 17,
     resposta: false
   }, {
     id: 18,
     resposta: false
   }, {
     id: 19,
     resposta: false
   }, {
     id: 20,
     resposta: false
   }, {
     id: 21,
     resposta: false
   }, {
     id: 22,
     resposta: true
   }, {
     id: 23,
     resposta: false
   }, {
     id: 24,
     resposta: true
   }, {
     id: 25,
     resposta: true
   }, {
     id: 26,
     resposta: true
   }, {
     id: 27,
     resposta: false
   }, {
     id: 28,
     resposta: true
   }, {
     id: 29,
     resposta: false
   }, {
     id: 30,
     resposta: true
   }, {
     id: 31,
     resposta: false
   }, {
     id: 32,
     resposta: false
   }, {
     id: 33,
     resposta: false	 
   }, {
     id: 34,
     resposta: false
   }, {
     id: 35,
     resposta: false
   }, {
     id: 36,
     resposta: false	 
   }
 ]
 
  constructor() { }
  getPerguntas() {
    return this.perguntas;
  }
}

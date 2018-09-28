
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { SunvoteServiceService } from '../sunvote-service.service';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {
  total = 26;
  lineChart = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  verdadeiro = [];
  falso = [];
  falsoSize = '50%';
  verdadeiroSize = '50%';
  falsoAmount = 0;
  verdadeiroAmount = 0;
  constructor(private sunvoteService: SunvoteServiceService) { 

  }
  
  ngOnInit(): void {    
    this.sunvoteService.getVotes().subscribe((votos)=>{
      console.log(votos);
      this.calculaVotacao(votos,true);
    })

  }
  calculaVotacao(votos, resposta) {
    votos.forEach(voto => {
      if (voto.KeyValue=="A") {//selecionou a primeira opção
        this.verdadeiro.push(voto);
        if (resposta) {
           //a resposta da pergunta atual é verdadeiro          
          //deve calcular pontos para a equipe que acertou;
        }
      } else {//selecionou a segunda opção
        this.falso.push(voto);
        if (!resposta) { //a resposta da pergunta atual falso         
          //deve calcular pontos para a equipe que acertou;
        }
      }

    });
    this.ajustaGrafico();

  }
  ajustaGrafico() {
    this.falsoAmount = (this.falso.length / this.total) * 100;
    this.verdadeiroAmount = (this.verdadeiro.length / this.total) * 100;
    this.falsoSize = this.falsoAmount + '%';
    this.verdadeiroSize = this.verdadeiroAmount + '%';
  }  ;
  
  title = 'sicoob';
}

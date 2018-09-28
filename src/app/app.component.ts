import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { SunvoteServiceService } from './sunvote-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
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
    this.calculaVotacao([1,2,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],true);
    this.sunvoteService.getVotes().subscribe((votos)=>{
      // console.log(this.xmlToJson(votos));
    })

  }
  calculaVotacao(votos, resposta) {
    votos.forEach(voto => {
      if (true) {//selecionou a primeira opção
        this.verdadeiro.push(voto);
        if (true) { //a resposta da pergunta atual é verdadeiro          
          //deve calcular pontos para a equipe que acertou;
        }
      } else {//selecionou a segunda opção
        this.falso.push(voto);
        if (!true) { //a resposta da pergunta atual falso         
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
  // xmlToJson(xml) {
	
    // // Create the return object
    // var obj = {};
  
    // if (xml.nodeType == 1) { // element
      // // do attributes
      // if (xml.attributes.length > 0) {
      // obj["@attributes"] = {};
        // for (var j = 0; j < xml.attributes.length; j++) {
          // var attribute = xml.attributes.item(j);
          // obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        // }
      // }
    // } else if (xml.nodeType == 3) { // text
      // obj = xml.nodeValue;
    // }
  
    // // do children
    // if (xml.hasChildNodes()) {
      // for(var i = 0; i < xml.childNodes.length; i++) {
        // var item = xml.childNodes.item(i);
        // var nodeName = item.nodeName;
        // if (typeof(obj[nodeName]) == "undefined") {
          // obj[nodeName] = xmlToJson(item);
        // } else {
          // if (typeof(obj[nodeName].push) == "undefined") {
            // var old = obj[nodeName];
            // obj[nodeName] = [];
            // obj[nodeName].push(old);
          // }
          // obj[nodeName].push(xmlToJson(item));
        // }
      // }
    // }
    // return obj;
  // };
  title = 'sicoob';
}

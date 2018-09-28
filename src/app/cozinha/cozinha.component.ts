import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';
import { SocketService } from '../socket.service';
import { PerguntaService } from '../pergunta.service';


@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.css']
})
export class CozinhaComponent implements OnInit {
  times =[];  
  private backgroundPergunta: Object;
  private backgroundResposta: Object;
  perguntaAtual={id:0,resposta:false};
  perguntas=[];
  constructor(private timeService:TimeService,private socketService:SocketService, private perguntaService:PerguntaService) { }

  ngOnInit() {
    this.perguntas=this.perguntaService.getPerguntas();
    this.perguntaAtual=this.perguntas[0];
    this.timeService.get().subscribe((times)=>{
      this.times = times;
    })
    this.socketService.getMessages().subscribe((message)=>{
      console.log(message);
    })
  }
  navegaLocal(time){
    console.log(time);
    this.socketService.emit("local",time.area)
  }
  atualizaTimes(){
    this.timeService.get().subscribe((times)=>{
      this.times = times;
    })
  }
  reset(){
    console.log('reset');
    this.socketService.emit("winner",'reset')
  }
  mostraPergunta(){
    this.backgroundPergunta= { 'background-image':`url(/assets/QUESTOES/QUESTAO_${this.perguntaAtual.id}.JPG)`};
    console.log(this.backgroundPergunta);
  }
  proximaPergunta(){    
    this.perguntaAtual=this.perguntas[this.perguntaAtual.id+1];
    this.limpaBackgrounds();
  }
  mostraResposta(){
    this.backgroundResposta={'background-image':`url(/assets/RESPOSTAS/RESPOSTA_${this.perguntaAtual.id}.JPG)`};
    console.log(this.backgroundPergunta);
  }
  limpaBackgrounds(){
    this.backgroundPergunta={};
    this.backgroundResposta={};
  }
  

}

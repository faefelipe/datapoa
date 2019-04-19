import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatapoaService } from '../services/datapoa.service';

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrls: ['./itinerario.component.scss']
})
export class ItinerarioComponent implements OnInit {

  constructor(
    private dataPoaService: DatapoaService,
    private route: ActivatedRoute
  ) {
    this.id = route.snapshot.paramMap.get('id');
  }

  id: String;
  itinerario;
  line = {
    "codigo": "",
    "nome": ""
  };

  ngOnInit() {
    this.getItinerario();
  }

  getItinerario(){
    this.dataPoaService.getItinerario(this.id).subscribe((data) => {
      this.line.codigo = data.codigo;
      this.line.nome = data.nome;

      delete data.codigo;
      delete data.nome;
      delete data.idlinha;

      this.itinerario = Object.keys(data).map(i => data[i]);
    }, (err) => {
      console.log(err);
    });
  }
}

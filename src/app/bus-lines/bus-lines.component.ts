import { Component, OnInit } from '@angular/core';
import { DatapoaService } from '../services/datapoa.service';
import { Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bus-lines',
  templateUrl: './bus-lines.component.html',
  styleUrls: ['./bus-lines.component.scss']
})
export class BusLinesComponent implements OnInit {

  constructor(
    private dataPoaService: DatapoaService,
    private formBuilder: FormBuilder
  ) {
    this.filter$
      .pipe(debounceTime(300),
        map((val) => {
          this.filterBusLines(val);
        })
      )
      .subscribe();


      this.busType$
      .pipe(debounceTime(300),
        map((val) => {
          this.getBusType(val);
        })
      )
      .subscribe();
  }

  busLines;
  busLinesFiltered;

  form: FormGroup;

  filter$ = new Subject<string>();
  busType$ = new Subject<string>();

  ngOnInit() {
    this.form = this.formBuilder.group({
      filter: [""]
    });

    this.getBusType("onibus");
  }

  getBusType(type: String){
    this.form.controls.filter.setValue("");
    this.busLinesFiltered = [];

    if(type == "onibus")
      this.getBusLines();

    else
      this.getBusLinesLotacao();
  }

  getBusLines(){
    this.dataPoaService.getBusLines().subscribe((data) => {
      this.busLines = data;
    }, (err) => {
      console.log(err);
    });
  }

  getBusLinesLotacao(){
    this.dataPoaService.getBusLinesLotacao().subscribe((data) => {
      this.busLines = data;
    }, (err) => {
      console.log(err);
    });
  }

  filterBusLines(filter: String){
    this.busLinesFiltered = [];

    if(!this.busLines || !filter)
      return false;

    else{
      for(let line of this.busLines){
        if(line.nome.toLowerCase().indexOf(filter.toLowerCase()) != -1)
          this.busLinesFiltered.push(line);
      }
    }
  }
}

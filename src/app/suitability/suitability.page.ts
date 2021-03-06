import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-suitability',
  templateUrl: './suitability.page.html',
  styleUrls: ['./suitability.page.scss'],
})
export class SuitabilityPage implements OnInit {

  suitability: any = {};
  formulario: any = {};

  constructor(private http: HttpClient, private appService: AppService) {
    appService.requestGet('./assets/formulario.json').subscribe(data => {
      this.formulario = data;
    });
  }

  ngOnInit() {
  }
}

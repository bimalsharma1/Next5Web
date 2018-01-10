import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'race',
    templateUrl: './race.component.html',
    styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit{
    public race: any;
    currentTime: Date;

    constructor(private route: ActivatedRoute, http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/race/' + this.route.snapshot.paramMap.get('id')).subscribe(result => {
            this.race = result.json() ;
        }, error => console.error(error));
   
        
    }

    ngOnInit() {
       
    }

  
}

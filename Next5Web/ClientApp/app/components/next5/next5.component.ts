import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
    selector: 'next5',
    templateUrl: './next5.component.html',
    styleUrls: ['./next5.component.css']
})
export class Next5Component implements OnInit {
    public next5: any;


    constructor(private router: Router, http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/next5').subscribe(result => {
            this.next5 = result.json();
        }, error => console.error(error));
    }

    ngOnInit() {
    }

    public getCurrentDate(dateTimeToCompare: Date): boolean {
        let currentDateTime = new Date().getTime()
        console.log(dateTimeToCompare)
        console.log(currentDateTime)
        return true;// currentDateTime > dateTimeToCompare

    }

    navigateToRace(raceNo: number): void {
        this.router.navigateByUrl('race/'+ raceNo)
    }

}
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
    baseUrl: string


    constructor(private router: Router, private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl
    }

    ngOnInit() {
        this.http.get(this.baseUrl + 'api/next5').subscribe(result => {
            this.next5 = result.json();
        }, error => console.error(error));
    }

    public getCurrentDate(dateTimeToCompare: Date): boolean {
        let currentDateTime = new Date().getTime()
        let dateTime = new Date(dateTimeToCompare).getTime()

        return currentDateTime < dateTime

    }

    navigateToRace(raceNo: number): void {
        this.router.navigateByUrl('race/'+ raceNo)
    }

}
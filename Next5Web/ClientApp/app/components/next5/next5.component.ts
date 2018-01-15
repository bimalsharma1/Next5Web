import { Component, Inject, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription';
import { of } from 'rxjs/observable/of';
//import { delay, share } from 'rxjs/Operator';

import { IntervalObservable } from 'rxjs/observable/IntervalObservable'; // <--- This changes from the first Example!

@Component({
    selector: 'next5',
    templateUrl: './next5.component.html',
    styleUrls: ['./next5.component.css']
})
export class Next5Component implements OnInit {
    public next5: any;
    baseUrl: string


    user: {};
    subscription: Subscription;
    public alive: boolean

    constructor(private router: Router, private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl
        this.alive = true;
    }

    ngOnInit() {
        //this.http.get(this.baseUrl + 'api/next5').subscribe(result => {
        //    this.next5 = result.json();
        //}, error => console.error(error));
        // get our data immediately when the component inits


        this.http.get(this.baseUrl + 'api/next5')
            //.first() // only gets fired once
            .subscribe((data) => {
                this.next5 = data.json();
               // this.display = true;
            });



        // get our data every subsequent 10 seconds
        IntervalObservable.create(10000)
           // .takeWhile(() => this.alive) // only fires when component is alive
            .subscribe(() => {
                this.http.get(this.baseUrl + 'api/next5')
                    .subscribe(data => {
                        this.next5 = data.json();
                    });
            });
    }
 
    ngOnDestroy() {
        this.subscription.unsubscribe()
       // this.http.get(this.baseUrl + 'api/next5').un
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
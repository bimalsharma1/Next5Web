import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'next5',
    templateUrl: './next5.component.html'
})
export class Next5Component {
    public next5: any;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/next5').subscribe(result => {
            this.next5 = result.json() ;
        }, error => console.error(error));
    }
}

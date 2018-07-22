import { Component } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';

@Component({
    moduleId: module.id,
    templateUrl: 'headers_n_params.component.html'
})
export class HeadersAndParamsComponent {

    constructor(private http: Http) { }

    postHeaders() {
        let customHeaders = new Headers({
            "Content-Type": "application/json",
            "X-Custom-Header": "Hello World"
        });

        let options = new RequestOptions({ headers: customHeaders });

        let data = {
            id: 7,
            name: 'Max'
        };

        this.http.post('/api/General', data, options).subscribe((res: Response) => {
            if (res.ok)
                console.log(res.json());
        });
    }

    postParams() {
        let params = new URLSearchParams();
        params.set("a", "1");
        params.set("b", "value");

        this.http.get('/api/general/get', { search: params }).subscribe(res => console.log(res), err => console.log(err));
    }
}
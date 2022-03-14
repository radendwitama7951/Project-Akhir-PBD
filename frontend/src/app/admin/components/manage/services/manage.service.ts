import { Injectable, OnInit } from "@angular/core";
import { MantanInterface } from "../types/mantan.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()

export class ManageService implements OnInit {
    private jsonUrl: string = 'src/app/admin/components/manage/components/manage-mantan/mantan.data.json';



    public getJSON (): Observable<any> {
        return this.http.get(this.jsonUrl);
    };

    constructor (
        private http: HttpClient

    ) {
        this.getJSON().subscribe(data => {
            console.log(data);
        })
    };

    ngOnInit(): void {
        
    }

};
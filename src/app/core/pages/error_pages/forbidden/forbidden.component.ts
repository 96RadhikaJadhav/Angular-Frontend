import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-forbidden',
    templateUrl: './forbidden.component.html',
    styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {

    constructor(titleService: Title) {
        titleService.setTitle("Forbidden")
    }

    ngOnInit(): void {
    }

}

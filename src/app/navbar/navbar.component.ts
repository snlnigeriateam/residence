import { Component } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
	contact_num: string = "+2345067898765";
	constructor(){}

	book() {
		window.open(`tel:${this.contact_num}`);
	}
}

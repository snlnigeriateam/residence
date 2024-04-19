import { Component } from '@angular/core';
import { UtilitiesService } from '../utilities.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	stay: number = 3;
	total: number = 45000;
	unit_cost: number = 15000;

	constructor(
		public utilities: UtilitiesService
	) {}

	updateTotal() {
		if (this.stay < 1 || this.stay > 30) {
			this.stay = 3;
		}
		this.total = this.stay * this.unit_cost;
	}
}

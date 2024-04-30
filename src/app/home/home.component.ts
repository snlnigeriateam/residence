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

	// carousel!: HTMLDivElement;
	// main!: HTMLDivElement;

	cImg: number = 1;//switch to object with alt text. Object can be separate from this item
	maxImages: number = 9;

	constructor(
		public utilities: UtilitiesService
	) {}

	ngAfterViewInit() {
		// this.main = <HTMLDivElement>document.getElementById('main');
		// this.carousel = <HTMLDivElement>document.getElementById('carousel');
	}

	updateTotal() {
		if (this.stay < 1 || this.stay > 30) {
			this.stay = 3;
		}
		this.total = this.stay * this.unit_cost;
	}

	scrollLeft() {
		// console.log(this.carousel.offsetLeft);
		if(this.cImg > 1){
			this.cImg--;
		}

		if(this.cImg === 1){
			this.disableButton(true);
		}

		if(this.cImg < this.maxImages){
			this.enableButton(false);
		}
	}

	scrollRight() {
		if(this.cImg < this.maxImages){
			this.cImg++;
		}

		if(this.cImg === this.maxImages){
			this.disableButton(false);
		}

		if(this.cImg > 1){
			this.enableButton(true);
		}
	}

	disableButton(back: boolean){
		document.getElementById(back ? 'back-button' : 'forward-button')?.classList.add('disabled-button');
	}

	enableButton(back: boolean){
		document.getElementById(back ? 'back-button' : 'forward-button')?.classList.remove('disabled-button');
	}
}

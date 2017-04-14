import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component(
{
	selector: 'productcard',
	templateUrl: './productcard.component.html',
	styleUrls: [ './productcard.component.css' ]
})
export class ProductCardComponent 
{
	@Input() name:String = 'Apple';
	@Input() color:String = 'green';
	@Input() description:String = `
		Lorem ipsum dolor sit amet, consetetur 
		sadipscing elitr, sed diam nonumy eirmod 
		tempor invidunt ut labore et dolore magna 
		aliquyam erat, sed diam voluptua. 
		At vero eos et accusam et justo duo 
		dolores et ea rebum.
		`;
	@Input() buttonLabel:String = 'More info';
	@Input() category:String = 'Category';
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component(
{
	selector: 'categoryradiobutton',
	templateUrl: './categorycheckbox.component.html',
	styleUrls: [ './categorycheckbox.component.css' ]
})
export class CategoryCheckboxComponent 
{
	@Input() id:String;
	@Input() selected:Boolean;
	@Input() color:String;
	@Input() label:String;

	@Output() select = new EventEmitter();

	onChange(selected:Boolean) 
	{
		this.selected = selected;
		this.select.next( this );
	}
}

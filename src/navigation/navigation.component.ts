import { Component } from '@angular/core';
import { NavigationService } from '../navigationservice/navigationservice.service';

@Component(
{
	selector: 'navigation',
	templateUrl: './navigation.component.html',
	styleUrls: [ './navigation.component.css' ],
	providers: [ NavigationService ] 	
})
export class NavigationComponent
{
	activeIndex:number = 0;
	navigationItems: Array<String>;


	constructor(private navigationService:NavigationService){}


	get activeItem():String
	{
		return this.navigationItems[ this.activeIndex ];
	}

	getActiveClass(item:String):String
	{
		if( item == this.activeItem )
			return 'active';
		else
			return null;
	}

	getProductList():void
	{
		this.navigationService.getNavigationItems().then( navigationItems => this.navigationItems = navigationItems );
	}

	ngOnInit():void
	{
		this.getProductList();
	}
}

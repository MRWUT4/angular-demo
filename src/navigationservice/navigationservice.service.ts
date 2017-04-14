import { Injectable } from '@angular/core';


@Injectable()
export class NavigationService 
{
	getNavigationItems(): Promise<String[]>
	{
		return new Promise(resolve => 
		{	
			var list = 
			[
				'Menu Item 1',
				'Menu Item 2',
				'Menu Item 3',
				'Menu Item 4',
				'Menu Item 5',
				'Menu Item 6'
			];

			resolve( list );
	    });
	}
}
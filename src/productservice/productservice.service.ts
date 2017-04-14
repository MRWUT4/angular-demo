import { Injectable } from '@angular/core';

import { Product, Category } from './product';
import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductService 
{
	getProductList(filters:Array<Category> = null): Promise<Product[]>
	{
		return new Promise(resolve => 
		{	
			if( filters )
			{
				var filtered = PRODUCTS.filter( product =>
				{
					return filters.find( filter => filter.id == product.category.id );
				});

				resolve( filtered );
			}
			else
				resolve( PRODUCTS );
	    });
	}

	getCategoryList(): Promise<Category[]>
	{
		return new Promise(resolve => 
		{	
			var list = [];

			PRODUCTS.forEach( product =>
			{
				var category = product.category;
				var isInList = category => list.find( element => element.id == category.id );

				if( !isInList( category ) )
					list.push( category );
			});

			resolve( list );
	    });
	}
}
import { Component } from '@angular/core';
import { Product } from '../productservice/product';
import { Category } from '../productservice/product';
import { ProductService } from '../productservice/productservice.service';

@Component(
{
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
	providers: [ ProductService ] 	
})
export class AppComponent 
{
	title = 'Brandname';


	products: Product[];
	categorys: Category[];


	constructor(private productService:ProductService){}


	get hasProducts():Boolean
	{
		return this.products && this.products.length > 0;
	}


	getProductList(filter:Array<Category> = null):void
	{
		this.productService.getProductList( filter ).then( products => this.products = products );
	}

	getCategoryList():void
	{
		this.productService.getCategoryList().then( categorys => this.categorys = categorys );
	}

	getCategoryWithId(id:String):Category
	{
		return this.categorys.find( category => category.id == id );
	}


	ngOnInit():void
	{
		this.getProductList();
		this.getCategoryList();
	}

	onCategorySelect(event):void
	{
		var category = this.getCategoryWithId( event.id );
		category.selected = event.selected;

		var selected = this.categorys.filter( category => category.selected );

		this.getProductList( selected );
	}
}

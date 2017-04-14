import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductCardComponent } from '../productcard/productcard.component';
import { CategoryCheckboxComponent } from '../categorycheckbox/categorycheckbox.component';
import { NavigationComponent } from '../navigation/navigation.component';

@NgModule(
{
	declarations: 
	[
		AppComponent,
		ProductCardComponent,
		CategoryCheckboxComponent,
		NavigationComponent
	],
	imports: 
	[
		BrowserModule,

		// FormsModule,
		HttpModule
	],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule { }

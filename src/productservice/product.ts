export class Category
{
	constructor(
		public id:String,
		public label:String,
		public color:String,
		public selected:Boolean = true
	){}
}

export class Product
{
	constructor(
		public name:String, 
		public category:Category,
		public description:String,
		public buttonLabel:String
	){}
}
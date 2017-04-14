import { Product, Category } from './product';

export const FRUIT: Category = new Category( 'fruit', 'Fruit', '#f39200' );
export const VEGETABLE: Category = new Category( 'vegetable', 'Vegetable', '#2b9030' );
export const MEAT: Category = new Category( 'meat', 'Meat', '#e73c01' );

export const PRODUCTS: Product[] = 
[
	new Product( 
		'Apple',
		FRUIT,
		`
		Lorem ipsum dolor sit amet, consetetur 
		sadipscing elitr, sed diam nonumy eirmod 
		tempor invidunt ut labore et dolore magna 
		aliquyam erat, sed diam voluptua. 
		At vero eos et accusam et justo duo 
		dolores et ea rebum.
		`,
		'More info',
	),

	new Product( 
		'Aubergine',
		VEGETABLE,
		`
		Lorem ipsum dolor sit amet, consetetur 
		sadipscing elitr, sed diam nonumy eirmod 
		tempor invidunt ut labore et dolore magna 
		aliquyam erat, sed diam voluptua. 
		At vero eos et accusam et justo duo 
		dolores et ea rebum.
		`,
		'More info',
	),

	new Product( 
		'Banana',
		FRUIT,
		`
		Lorem ipsum dolor sit amet, consetetur 
		sadipscing elitr, sed diam nonumy eirmod 
		tempor invidunt ut labore et dolore magna 
		aliquyam erat, sed diam voluptua. 
		At vero eos et accusam et justo duo 
		dolores et ea rebum.
		`,
		'More info',
	),

	new Product( 
		'Broccoli',
		VEGETABLE,
		`
		Lorem ipsum dolor sit amet, consetetur 
		sadipscing elitr, sed diam nonumy eirmod 
		tempor invidunt ut labore et dolore magna 
		aliquyam erat, sed diam voluptua. 
		At vero eos et accusam et justo duo 
		dolores et ea rebum.
		`,
		'More info',
	),

	new Product( 
		'Chicken',
		MEAT,
		`
		Lorem ipsum dolor sit amet, consetetur 
		sadipscing elitr, sed diam nonumy eirmod 
		tempor invidunt ut labore et dolore magna 
		aliquyam erat, sed diam voluptua. 
		At vero eos et accusam et justo duo 
		dolores et ea rebum.
		`,
		'More info',
	),

	new Product( 
		'Orange',
		FRUIT,
		`
		Lorem ipsum dolor sit amet, consetetur 
		sadipscing elitr, sed diam nonumy eirmod 
		tempor invidunt ut labore et dolore magna 
		aliquyam erat, sed diam voluptua. 
		At vero eos et accusam et justo duo 
		dolores et ea rebum.
		`,
		'More info',
	),

	new Product( 
		'Beef',
		MEAT,
		`
		Lorem ipsum dolor sit amet, consetetur 
		sadipscing elitr, sed diam nonumy eirmod 
		tempor invidunt ut labore et dolore magna 
		aliquyam erat, sed diam voluptua. 
		At vero eos et accusam et justo duo 
		dolores et ea rebum.
		`,
		'More info',
	),

	new Product( 
		'Zucchini',
		VEGETABLE,
		`
		Lorem ipsum dolor sit amet, consetetur 
		sadipscing elitr, sed diam nonumy eirmod 
		tempor invidunt ut labore et dolore magna 
		aliquyam erat, sed diam voluptua. 
		At vero eos et accusam et justo duo 
		dolores et ea rebum.
		`,
		'More info',
	)
];
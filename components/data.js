export const Categories = [
    { id: 1, name: 'All' },

    { id: 2, name: "Cappuccino" },
    { id: 3, name: "Coffee Beans" },
    { id: 4, name: "Americano" },
    { id: 5, name: "Macchiato" }
]

export const history = [
    {
        date: '20th March 16:23',
        totalAmount: 74.40,
        items: [
            {
                id: 1,
                name: 'Cappuccino',
                line2: "With Steamed Milk",

                total: 40.02,
                image: require('./assets/cat11.png'),
                subItems: [
                    {
                        size: 'S', price: 4.00, quantity: 2, total: 8.00
                    },
                    {
                        size: 'M', price: 4.00, quantity: 2, total: 8.00
                    },
                    {
                        size: 'L', price: 4.00, quantity: 2, total: 8.00
                    },
                ],

            },
            {
                id: 2,
                name: 'Cappuccino',
                line2: "With Steamed Milk",

                total: 80.02,
                image: require('./assets/cat11.png'),
                subItems: [
                    {
                        size: 'S', price: 4.00, quantity: 2, total: 8.00
                    },
                    {
                        size: 'M', price: 4.00, quantity: 2, total: 8.00
                    },

                ],

            },
        ]
    },
    {
        date: '19th March 16:23',
        totalAmount: 104.40,
        items: [
            {
                id: 1,
                name: 'Cappuccino',
                line2: "With Steamed Milk",

                total: 40.02,
                image: require('./assets/cat11.png'),
                subItems: [
                    {
                        size: '250gm', price: 4.00, quantity: 2, total: 8.00
                    },
                    {
                        size: '100gm', price: 4.00, quantity: 2, total: 8.00
                    },
                    {
                        size: '50gm', price: 4.00, quantity: 2, total: 8.00
                    },
                ],

            },

        ]
    }
]

export const Data =
    [
        {
            catId: 2,
            catName: 'Cappuccino',
            data: [
                {
                    id: 1,
                    name: 'Cappuccino',
                    line2: "With Steamed Milk",
                    rating: 4.5,
                    totalRating: 1000,
                    price: 4.02,
                    location: 'Africe',
                    Category: 'Bean',
                    image: require('./assets/cat11.png'),
                    description: 'Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! ',
                    size: ['250gm', '500gm', '1000gm'],

                },
                {
                    id: 2,
                    name: 'Cappuccino',
                    line2: "With Foam",
                    rating: 4.2,
                    totalRating: 500,
                    price: 5.20,
                    location: 'Africe',
                    Category: 'Bean',
                    image: require('./assets/cat12.png'),
                    description: 'Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! ',
                    size: ['250gm', '500gm', '1000gm'],

                },
                {
                    id: 3,
                    name: 'Cappuccino',
                    line2: "With Foam",
                    rating: 4.2,
                    totalRating: 500,
                    price: 5.20,
                    location: 'Africe',
                    Category: 'Bean',
                    image: require('./assets/cat12.png'),
                    description: 'Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! ',
                    size: ['250gm', '500gm', '1000gm'],

                }

            ]
        },
        {
            catId: 3,
            catName: 'Robusta Beans',
            data: [
                {
                    id: 1,
                    name: 'Robusta Beans',
                    line2: 'Medium Roasted',
                    rating: 4.5,
                    totalRating: 1000,
                    price: 4.02,
                    location: 'Africe',
                    Category: 'Bean',
                    image: require('./assets/cat21.png'),

                    description: 'Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! ',
                    size: ['250gm', '500gm', '1000gm'],

                },
                {
                    id: 2,
                    name: 'Cappuccino',
                    line2: 'Medium Roasted',
                    rating: 4.2,
                    totalRating: 500,
                    price: 5.20,
                    location: 'Africe',
                    Category: 'Bean',
                    image: require('./assets/cat22.png'),
                    line3: 'Medium Roasted',
                    description: 'Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! ',
                    size: ['250gm', '500gm', '1000gm'],


                },
                {
                    id: 3,
                    name: 'Cappuccino',
                    line2: 'Medium Roasted',
                    rating: 4.2,
                    totalRating: 500,
                    price: 5.20,
                    location: 'Africe',
                    Category: 'Bean',
                    image: require('./assets/cat22.png'),
                    line3: 'Medium Roasted',
                    description: 'Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! ',
                    size: ['250gm', '500gm', '1000gm'],

                }

            ]
        },
    ]


export const cart = [
    {
        id: 1,
        name: 'Cappuccino',
        line2: "With Steamed Milk",

        total: 40.02,
        image: require('./assets/cat11.png'),
        subItems: [
            {
                size: 'S', price: 4.00, quantity: 2, total: 8.00
            },
            {
                size: 'M', price: 4.00, quantity: 2, total: 8.00
            },
            {
                size: 'L', price: 4.00, quantity: 2, total: 8.00
            },
        ],

    },
    {
        id: 2,
        name: 'Robusta Beans',
        line2: "With Steamed Milk",
        size: 'S',
        total: 40.02,
        image: require('./assets/cat22.png'),
        quantity: 2,

    },
    {
        id: 1,
        name: 'Cappuccino',
        line2: "With Steamed Milk",

        total: 40.02,
        image: require('./assets/cat11.png'),
        subItems: [
            {
                size: '250gm', price: 4.00, quantity: 2, total: 8.00
            },
            {
                size: '100gm', price: 4.00, quantity: 2, total: 8.00
            },
            {
                size: '50gm', price: 4.00, quantity: 2, total: 8.00
            },
        ],

    },
    {
        id: 2,
        name: 'Robusta Beans',
        line2: "With Steamed Milk",
        size: 'S',
        total: 100.02,
        image: require('./assets/cat12.png'),
        quantity: 2,

    },

]
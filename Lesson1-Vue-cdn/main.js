// const app = Vue.createApp({
//     data: function() {
//         return {}
//     }
// })

const app = new Vue({
    el:'#app',
    data: {
        formData: {
            name: '',
            email: ''
        },
        tableData: [],
        greeting: 'Good morning',
        names: [
            'Mary',
            'Omolade',
            'Moyinoluwa',
            'Oluwatimileyin',
            'Ibukun',
            'Temitope',
            'Miracle',
            'Olajuwon',
            'Fatomi'
        ],
        name: '',
        message: 'Welcome to Vue class',
        product: 'Boots',
        products: [
            'Boots',
            'Socks',
            'Shirts'
        ],
        newProducts: [
            {
                name: 'Boots',
                quantity: 7
            },
            {
                name: 'Tops',
                quantity: 3
            },
            {
                name: 'Shirts',
                quantity: 2
            },
            {
                name: 'Sneakers',
                quantity: 4
            }
        ]
    },
    computed: {
        totalProducts() {
            return this.newProducts.reduce((sum, product) => {
                return sum + product.quantity
            }, 0)
        }
    },
    // mounted() {
    //     alert('Welcome to the academy')
    // },
    // created() {
    //     fetch('https://api.myjson.com/bins/74163')
    //     .then(response => response.json())
    //     .then(json => {
    //         this.newProducts = json.products
    //     })
    // },
    methods: {
        submitForm() {
            this.tableData.push({...this.formData})
            this.formData.name = ''
            this.formData.email = ''
        },
        greet() {
            this.greeting = 'Hey, Moyin!!'
        },
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
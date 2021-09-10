var app1 = new Vue ({
    el: "#app",
    data: {
        message: 'hello world!',
        myTitle: 'You loaded on this page on ' + new Date().toLocaleDateString(),
        seen: true,
        myItems: [
            { text: 'Learn Javascript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }

})
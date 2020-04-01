block('hero')({
    content: (_, ctx) => [{
        elem: 'category',
        content: {
            block: 'product',
            title: ctx.category
        }
    }, {
        elem: 'text',
        content: ctx.text 
    }]
})
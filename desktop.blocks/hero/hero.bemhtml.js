block('hero')(
    {
        content: (node, ctx) => [
            {
                elem: 'category',
                name: ctx.category 
            }, {
                elem: 'text',
                content: ctx.text 
            }
        ]
    },
    elem('category')({
        content: (node, ctx) => ({
            block: 'product',
            title: ctx.name
        })
    }),
)
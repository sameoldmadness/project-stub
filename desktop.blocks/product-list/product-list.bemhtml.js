block('product-list')(
    {
        content: (node, ctx) => [
            {
                elem: 'header',
                content: ctx.title
            },
            ...ctx.products.map(product => ({
                elem: 'item',
                content: {
                    block: 'product',
                    title: product.title,
                    tagline: product.tagline
                }
            }))
        ]
    },
)
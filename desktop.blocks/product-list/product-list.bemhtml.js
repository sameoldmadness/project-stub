block('product-list')(
    {
        content: (node, ctx) => [
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
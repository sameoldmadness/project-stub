block('product-list')(
    {
        tag: 'ul',
        content: (node, ctx) => [
            ...ctx.products.map(product => ({
                tag: 'li',
                mix: { elem: 'item', block: 'product-list' },
                block: 'product',
                title: product.title,
                tagline: product.tagline
            }))
        ]
    },
)
block('product-list')(
    {
        content: (node, ctx) => [
            {
                elem: 'header',
                content: ctx.title
            },
            ...ctx.products.map(product => ({
                elem: 'product',
                content: [
                    {
                        block: 'product',
                        title: product.title
                    },
                    {
                        elem: 'tagline',
                        content: product.tagline
                    }
                ]
            }))
        ]
    },
)
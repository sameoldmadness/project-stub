block('product')(
    {
        content: (node, ctx) => [
            {
                elem: 'wrapper',
                content: [
                    {
                        elem: 'icon',
                        content: { block: 'klarna-logo-icon' }
                    },
                    {
                        elem: 'title',
                        content: ctx.title
                    }
                ]
            },
            ctx.tagline && {
                elem: 'tagline',
                content: ctx.tagline
            }
        ]
    }
)
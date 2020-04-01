block('product')(
    {
        content: (node, ctx) => [
            {
                elem: 'icon'
            },
            {
                elem: 'title',
                content: ctx.title
            }
        ]
    },
    elem('icon')({
        content: {
            block: 'klarna-logo-icon'
        }
    })
)
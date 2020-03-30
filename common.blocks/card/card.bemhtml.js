block('card')(
    {
        tag: 'article',
        content: (_, ctx) => [
            {
                elem: 'title',
                content: ctx.title,
            },
            {
                elem: 'text',
                text: ctx.description
            }
        ]
    },

    elem('title')({ 
        tag: 'h1' 
    }),

    elem('text')({ 
        tag: 'div',
        content: (_, ctx) => ctx.text.split('\n').filter(Boolean).map(p => ({
            elem: 'paragraph',
            content: p
        }))
    }),

    elem('paragraph')({ 
        tag: 'p' 
    }),
);
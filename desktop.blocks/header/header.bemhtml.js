block('header')(
    {
        tag: 'article',
        mods: {
            closed: true
        },
        content: (_, ctx) => [
            {
                elem: 'navbar',
            },
            {
                elem: 'menu',
                content: {
                    elem: 'menu-content',
                    content: ctx.menu
                }
            }
        ]
    },
    elem('navbar')({
        content: {
            elem: 'icon'
        }
    }),
    elem('icon')({
        content: [
            { block: 'menu-icon' },
            { block: 'close-icon' },
        ],
    })
)

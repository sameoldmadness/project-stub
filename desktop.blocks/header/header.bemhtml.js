block('header')(
    {
        tag: 'article',
        js: true,
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
        content: {
            block: 'menu-icon'
        },
    })
)

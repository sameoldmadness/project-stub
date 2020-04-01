block('menu-icon')(
    {
        tag: 'svg',
        attrs: {
            height: 20,
            width: 20,
        },
        content: {
            html: `
                <g transform="translate(0, 0) scale(1)">
                    <path
                        d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z"
                        fill="rgba(23, 18, 15, 1)"
                    />
                </g>
            `
        }
    },
)

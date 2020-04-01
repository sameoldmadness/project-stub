const products = [
    {
      title: "Instalments",
      tagline: "Interest-free alternative to credit with 3 instalments."
    },
    {
      title: "Pay in 30 days",
      tagline: "Offer an extra 30 days to pay."
    },
    {
      title: "Financing",
      tagline: "Gives your customers the option to pay over 6 to 36 months."
    }
];

module.exports = {
    block: 'page',
    title: 'Title of the page',
    head: [
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'demo.css' }
    ],
    scripts: [{ elem: 'js', url: 'demo.js' }],
    content: [
        {
            block: 'header',
            menu: {
                block: 'product-list',
                title: 'Zahlungsarten',
                products,
            }
        },
        {
            block: 'hero',
            category: 'Instalments',
            text: 'Offer 3 interest-free instalments.'
        }
    ]
};

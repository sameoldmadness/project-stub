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
            block: 'card',
            mods: {
                other: true
            },
            title: 'title',
            description: `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente modi, necessitatibus sunt illum tempore vero officia non dignissimos iste ducimus laboriosam voluptate totam ad repudiandae, nobis eligendi delectus odit eius? Accusantium voluptatum qui maiores corrupti eaque architecto ullam non eveniet totam. Neque natus reprehenderit, ipsam ea harum molestiae consequatur? Suscipit, voluptatum fugiat provident quaerat, voluptatibus nihil, dolorum dolorem repellendus tempore unde laudantium sunt! Id sequi consequatur repellendus, magnam dicta expedita nihil veritatis accusamus officiis nostrum facilis modi facere voluptate, eligendi aliquid blanditiis odit cumque quis maiores, ipsam omnis nobis beatae. Repellendus laboriosam eaque saepe modi nulla veritatis quasi consectetur.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente modi, necessitatibus sunt illum tempore vero officia non dignissimos iste ducimus laboriosam voluptate totam ad repudiandae, nobis eligendi delectus odit eius? Accusantium voluptatum qui maiores corrupti eaque architecto ullam non eveniet totam. Neque natus reprehenderit, ipsam ea harum molestiae consequatur? Suscipit, voluptatum fugiat provident quaerat, voluptatibus nihil, dolorum dolorem repellendus tempore unde laudantium sunt! Id sequi consequatur repellendus, magnam dicta expedita nihil veritatis accusamus officiis nostrum facilis modi facere voluptate, eligendi aliquid blanditiis odit cumque quis maiores, ipsam omnis nobis beatae. Repellendus laboriosam eaque saepe modi nulla veritatis quasi consectetur.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente modi, necessitatibus sunt illum tempore vero officia non dignissimos iste ducimus laboriosam voluptate totam ad repudiandae, nobis eligendi delectus odit eius? Accusantium voluptatum qui maiores corrupti eaque architecto ullam non eveniet totam. Neque natus reprehenderit, ipsam ea harum molestiae consequatur? Suscipit, voluptatum fugiat provident quaerat, voluptatibus nihil, dolorum dolorem repellendus tempore unde laudantium sunt! Id sequi consequatur repellendus, magnam dicta expedita nihil veritatis accusamus officiis nostrum facilis modi facere voluptate, eligendi aliquid blanditiis odit cumque quis maiores, ipsam omnis nobis beatae. Repellendus laboriosam eaque saepe modi nulla veritatis quasi consectetur.
`
        }
    ]
};

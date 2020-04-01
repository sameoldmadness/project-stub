modules.define('header', function(provide, BEMDOM){

provide(BEMDOM.decl(this.name,
    {
        onSetMod: {
            'js' : {
                'inited': function() {
                    alert(1)

                    // this.bindTo('elem', 'click', function(e) {
                    //     this.setMod('size', 'big');
                    // });

                    // console.log(this.params); // { foo : 'bar' }
                    // this.elem('file')
                    // this.toggleMod('color', 'green', 'red');
                }
            }
        }
    },
    {
        live: function() {
            alert(1)
            // Here you can code when to initialize this block instance
        }
    }
));

});
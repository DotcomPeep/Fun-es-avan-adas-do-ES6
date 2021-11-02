var obj = {
    showContext: function showContext() {
        console.log(this); //this = objeto    //this.log('teste');
/*        setTimeout (function () {
            this.log('after 1000ms');
        }.bind (this), 1000);*/
    },
    log: function log (value) {
        console.log(value);
    }
};

obj.showContext();
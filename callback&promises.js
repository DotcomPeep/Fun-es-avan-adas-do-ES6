//Promises

const doSomethingPromise = () =>
 new Promise ((resolve, reject) => {
    setTimeout(function() {
        //did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () =>
 new Promise((resolve, reject) => {
    setTimeout(function() {
        //did other thing
        resolve('Second data');
    }, 1000);
});

/* Para mostrar ambas ao mesmo tempo
Promise.all([doSomethingPromise(). doOtherThingPromise()]).then((data) => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
});
*/

doSomethingPromise()
  .then(data => {
      console.log(data.split(''));
      return doOtherThingPromise();
  })
  .then(data2 => console.log(data2.split('')))
  .catch(error => console.log('Ops', error));

/* const doSomethingPromise = new Promise ((resolve, reject) => {
    throw new Error('Something went wrong');
    setTimeout(function() {
        //did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        //did other thing
        resolve('Second data');
    }, 1000);
});

doSomethingPromise.then(data => console.log(data))
.catch(error => console.log(error));
*/

//uma Promisse pode ter 3 status
//pending => pendente/ em execução
//fullfilled => terminou execução
//rejected => ocorreu algum erro

//callbacks
function doSomething(callback) {
    setTimeout(function() {
        //did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        //did other thing
        callback('Second data');
    }, 1000);
}

function doAll() {
    try {
    doSomething(function(data) {
        var processedData = data.split('');

    try {
        doOtherThing(function(data2) {
            var processedData2 = data2.split('');

    try {
            setTimeout(function() {
                console.log(processedData, processedData2);
            }, 1000);
          } catch(error) {
            //handle error
        }
        });
        } catch(error) {
            //handle error
        }
    });
} catch(err) {
    //handle error
    }
}

doAll();
const myFun = () => {
    console.log('[info]', 'show info');
    var a = 1;
    console.log('a', a) 
    var b = 1
    const fun = () => {
        console.log('eslint test');
    }
    fun();
};

myFun();


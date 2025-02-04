function home(){
    console.log('Home page');
}
function person(name,callback){
    console.log('Person page:',name);
    callback();
}
person('John',home);
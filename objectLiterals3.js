var foo = {
    bar: 123,
    bas: {
        bas1: 'some string',
        bas2: 345
}
};
console.log(foo);

document.getElementById('text').value = foo.bas.bas1 + " and " + foo.bas.bas2;

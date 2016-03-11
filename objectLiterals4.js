var foo = {
    bar: 123,
    bas: [1, 2, 3]
};
console.log(foo);

document.getElementById('text').value = foo.bas[0] + " and " + foo.bas[2];

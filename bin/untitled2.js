var obj = {
  foo: function() {
    console.log('foo');
  },
  bah: function() {
    console.log('bah');
  },
  proto: null
}

//the frowned upon with statement use with caution!!!
with(obj){
function fn1() {
  foo();
  console.log('fn1');
}

function fn2() {
  bah();
  console.log('fn2');
}

function main() {
  fn1(); // Should output: foo and then fn1
  fn2(); // should output: bah and hen fn2
}
}
main()

//Dependency Injection
//es6 can do this a lot cleaner.
;(function(o){
  var foo = o.foo,
      bah = o.bah;

  function fn1() {
    foo();
    console.log('fn1');
  }

  function fn2() {
    bah();
    console.log('fn2');
  }

  function main() {
    fn1(); // Should output: foo and then fn1
    fn2(); // should output: bah and hen fn2
  }
}(obj))


//es6 Dependency Injection 0 globals
;(({foo,bah} = obj)=>{
  function fn1() {
    foo();
    console.log('fn1');
  }

  function fn2() {
    bah();
    console.log('fn2');
  }

  function main() {
    fn1(); // Should output: foo and then fn1
    fn2(); // should output: bah and hen fn2
  }
})()
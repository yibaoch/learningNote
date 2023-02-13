function fn() {
  var i = 10;
  return function (n) {
      console.log(n + (++i));
  };
}

var f = fn();
f(10)
f(20); 
fn()(10); 
fn()(20);
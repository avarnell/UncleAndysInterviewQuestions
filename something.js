function adder(x,y){
  return new Array(x).concat(new Array(y)).length
}

console.log(adder(4,6))

function Person(name){
  if(this instanceOf Person){
    this.name = name
  }else {
    return new Person(name)
  }
}

var a = new Person('jamie')

var b = Person('jamie')


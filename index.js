// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name){
    drivers.push(name);
}

// 1) prepends a driver to the beginning of the drivers array
function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver () {
    drivers.pop();
}

function destructivelyRemoveFirstDriver () {
    drivers.shift();
}

// spread the drivers + the params
function appendDriver (name) {
    return [...drivers, name];
  }

function prependDriver(name){
    return [name, ...drivers];
}

function removeLastDriver(){
    return drivers.slice(0, -1);
}

function removeFirstDriver(){
    return drivers.slice(1);
}
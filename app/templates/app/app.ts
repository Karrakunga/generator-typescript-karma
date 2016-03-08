import {Messages} from './classes/Messages';

var greeter = new Messages.Greeter("Hello World");

document.body.innerHTML = greeter.greet();


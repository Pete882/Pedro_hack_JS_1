/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (let i =0; i<arr.length; i++) {
    if (arr[i] !== "foo" && arr[i] !== "echo") {
        let alpha = arr[i].replace(/a/g, "@");
        if (alpha === "qux") {
            alpha = alpha.toUpperCase();
        }
        result.push(alpha);
    }
}

//export result
module.exports = result;
const {
    set
} = require("vue/types/umd");

/**
 * Object.defineProperty() gtter() stter() 
 */
function oberver(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    for (const k in obj) {
        dafineReactive(obj, k, obj[k])
    }
}

function dafineReactive(obj, k, value) {
    Object.defineProperty(obj, k, {
        get() {
            return value
        },
        set(newValue) {
            console.log(newValue)
        }
    })
}

let data = {
    a: 10,
    b: 20
}

data.a = 20;

oberver(data);
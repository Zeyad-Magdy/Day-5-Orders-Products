const Ajv = require('ajv')
const ajv = new Ajv();

let ProductSchema = {
    type:"object",
    properties:{
        id:{type:"integer"},
        Name:{
            type:"string",
            minLength:2,
            maxLength:50
        },
        price:{   
            type:"integer",
            minimum:1
        }
    },
    required:['Name','price'],
    additionalProperties: false
}

module.exports = ajv.compile(ProductSchema)
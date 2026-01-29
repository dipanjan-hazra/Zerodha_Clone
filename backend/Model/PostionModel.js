const {model} = require ('mongoose');

const {PostionSchema} = require('../schemas/PostionSchema');

const PostionModel =new model("Postion",PostionSchema);

module.exports={PostionModel}

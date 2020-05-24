const mongoose = require('mongoose');
const schema = mongoose.Schema; //Schema -to właściwość, to nazwa stała, schema to nasza nazwa nadana

let commentSchema =new schema({
        name: {
            type: String
        },
        comment: {
            type: String
        },

    },{
    collection: 'comments' //nazwa kolekcji
        }
)
module.exports= mongoose.model('Comment', commentSchema)
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    username: ({
        type: String,
        require: [true, 'please enter the username']
    }),
    email: ({
        type: String,
        require: [true, 'please enter the email']
    }),
    password: ({
        type: String,
        require: [true, 'please enter the password']
    })

},
    {
        timestamp: true
    }
)

module.exports=mongoose.model('user',userSchema);
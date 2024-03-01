const mongoose =  require('mongoose')

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    dueDate: Date,
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    status: { type: String, enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },{

    timestamp:true,
  }
  );


  module.exports = mongoose.model('Task',taskSchema)


  
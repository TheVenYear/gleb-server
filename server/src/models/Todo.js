import mongoose, { Schema } from 'mongoose';

// Схема туду, добавит в mongodb
const schema = new Schema({
  title: String,
  created: {
    type: Date,
    default: Date.now(),
  },
});

// Она создаёт модель на сервере
const Todo = mongoose.model('Todo', schema);
export default Todo;

import mongoose, { Schema } from 'mongoose';

// Схема туду, добавит в mongodb
const schema = new Schema({
  email: String,
  password: String,
});

// Она создаёт модель на сервере
const User = mongoose.model('User', schema);
export default User;

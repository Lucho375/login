import UserModel from '../models/user.model.js'

class UserMongooseRepository {
  create(user) {
    return UserModel.create(user)
  }

  getAll() {
    return UserModel.find()
  }

  getOne(value) {
    return UserModel.findOne(value)
  }

  updateOne(id, update) {
    return UserModel.findByIdAndUpdate({ _id: id }, update, { new: true })
  }

  deleteOne(id) {
    return UserModel.findByIdAndUpdate({ _id: id }, { enabled: false }, { new: true })
  }

  updatePassword(id, newPassword) {
    return UserModel.findByIdAndUpdate({ _id: id }, newPassword)
  }
}

export default UserMongooseRepository
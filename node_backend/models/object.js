const cuid = require('cuid')

const db = require('../db')
const axios = require('axios')

const User = db.model('Object1', {
  _id: { type: String, default: cuid },
  name: { type: String, required: true},
  id: { type: Number, required: true},
  placeholder: { type: String, required: true},

})

module.exports = {
  get,
  list,
  create,
  edit,
  remove,
  get2,
  model: User
}

async function list () {
  const user = await User.find({})
  return user
}  


async function get (_id) {
  const product = await User.findById(_id)
  return product
}

  async function get2 (id) {
    const user = await User.findOne({ mobile_number:id })
    if(user==null)
    {
    return { success:false}
    }
    else
    {
      return { success:true,data:user}
    }
  }



async function create (fields) {


    const product = await new User(fields).save()
    return product            
   
}

async function edit (_id, change) {
  const product = await get({ _id })
  Object.keys(change).forEach(function (key) {
    product[key] = change[key]
  })
  await product.save()
  return product
}

async function remove (_id) {
  await User.deleteOne({ _id })
}


const cuid = require('cuid')

const db = require('../db')
const axios = require('axios')

const User = db.model('Stock_Creation', {
  _id: { type: String, default: cuid },
  name: { type: String, required: true },
  risk_category: { type: String, required: true },
  ntpc_value: { type: String, required: true },
  hdfc_value: { type: String, required: true },
  maruti_value: { type: String, required: true },
  add_security_value: { type: String, required: true},


})

module.exports = {
  get,
  list,
  create,
  edit,
  remove,
  get2,
  user_validate,
  model: User
}

async function list () {
  const user = await User.find({})
  return user
}  

async function user_validate (id,name) {
  const user = await User.findOne({mobile_number:id,password:name})
  // console.log(user)
  if(user==null)
  {
  return { success:false}
  }
  else
  {  // password: { type: String, required: true},

    return { success:true,data:user}
  }
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

  let temp = await get2(fields.name)
  if(temp.success == false)
    {
    const product = await new User(fields).save()
    return product            
    }
  else
    {
      return "customer ID already exist"
    }
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


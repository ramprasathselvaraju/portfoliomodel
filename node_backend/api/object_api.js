const User1 = require('../models/object')
const autoCatch = require('../lib/auto-catch')

module.exports = autoCatch({
  getuserbyid,
  listProducts,
  createProduct,
  editProduct,
  deleteProduct,
 
})

async function getuserbyid (req, res, next) {
  // if (!req.isAdmin) return forbidden(next)
  const { id } = req.params
  const user = await User1.get(id)
  if (!user) return next()
  res.json(user)
}

async function listProducts (req, res, next) {
  const products1 = await User1.list()
  res.json(products1)
}

async function createProduct (req, res, next) {
  const user = await User1.create(req.body)
  res.json(user)
}



async function editProduct (req, res, next) {
  const change = req.body
  const user = await User1.edit(req.params.id, change)
  res.json(user)
}

async function deleteProduct (req, res, next) {
  // if (!req.isAdmin) return forbidden(next)
  await User1.remove(req.params.id)
  res.json({ success: true })
}

function forbidden (next) {
  const err = new Error('Forbidden')
  err.statusCode = 403
  return next(err)
}

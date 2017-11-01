var recipes = {key: "value"}

function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({},recipes,{ prop: 1, prop2: 2 })
}

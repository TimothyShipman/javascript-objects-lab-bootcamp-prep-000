var recipes = {key: "value"}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},recipes,{ prop: '1', prop2: '2' })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  const prop = 'key'
  var recipes = { [prop]: "1" }
  const prop2 = 'key'
  var recipes = { [prop2]: "2" }
  return recipes
}

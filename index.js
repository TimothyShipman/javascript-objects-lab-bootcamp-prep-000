var recipes = {key: "value"}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},recipes,{ prop: '1', prop2: '2' })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes.prop = "1"
  recipes.prop = "2"
  return recipes
}

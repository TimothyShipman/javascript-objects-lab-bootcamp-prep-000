var recipes = {key: "value"}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},recipes,{ prop: '1', prop2: '2' })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
  }

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object, key)
}

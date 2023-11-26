const KEY_QUERY = 'productsQuery';
const STORAGE_KEY = 'localKey';

function save(key, value){
  try {
    const serializedState = JSON.stringify(value)
    localStorage.setItem(key, serializedState)
  } catch (error) {
    console.error("Set state error: ", error.message)
  }
}

function load(key) {
  try {
    const serializedState = localStorage.getItem(key)
    return serializedState === null ? undefined : JSON.parse(serializedState)
  } catch (error) {
    console.error("Get state error: ", error.message)
    return null
  }
}

function remove(key) {
    localStorage.removeItem(key)
}

export default {
  save,
  load,
  remove,
  KEY_QUERY,
  STORAGE_KEY
}

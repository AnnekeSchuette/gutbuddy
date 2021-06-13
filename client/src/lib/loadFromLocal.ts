export default function loadFromLocal(key: string): any {
  try {
    return JSON.parse(localStorage.getItem(key) || '{}')
  } catch (error) {
    console.log(error)
  }
}

export default function saveToLocal(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data))
}

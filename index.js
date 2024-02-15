// # 1
const names = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];
names.forEach(name => console.log('Привет, ' + name))

// # 2 
const arr = [1, 2, 3, 4, 5] 
console.log(arr.map(num => num * 10))

// # 3 
const arr1 = [5, 12, 8, 130, 44]
console.log(arr1.filter(num => num > 10))

// # 4
const users = [
{name: 'Иван', age: 23}, 
{name: 'Мария', age: 18}, 
{name: 'Алексей', age: 32}, 
{name: 'Ольга', age: 24}, 
{name: 'Сергей', age: 17}, 
{name: 'Анна', age: 21}
]

const filtered = users.filter(user => user.age > 18).map(user => `${user.name} (${user.age} лет)`)
console.log(filtered)
// # 5
const items = [
  {product: 'Телефон', price: 50000, quantity: 1}, 
  {product: 'Чехол', price: 1500, quantity: 2}, 
  {product: 'Зарядное устройство', price: 2500, quantity: 1}
]
const ttlCost = items.reduce((acc, user) => {
  acc += user.price * user.quantity;
  return acc;
}
, 0)

console.log(ttlCost)



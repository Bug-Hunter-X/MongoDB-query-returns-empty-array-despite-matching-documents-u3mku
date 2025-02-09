```javascript
const query = { field: value };
const options = { projection: { _id: 0 } };
db.collection.find(query, options).toArray((err, result) => {
if (err) {
  console.error('Error:', err);
}
  // ...
});
```
```javascript
db.collection.createIndex( { field: 1 } ); // Ensure an index exists
const query = { field: { $eq: value } }; // Use explicit comparison operators
const options = {}; // Remove projection if _id is required
db.collection.find(query, options).toArray((err, result) => {
if (err) {
  console.error('Error:', err);
}
  console.log('Result:', result); // Check the result
});
```
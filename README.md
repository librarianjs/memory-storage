# Librarian In Memory Data

A [Librarian](https://github.com/librarianjs/librarian) storage plugin that stores images in memory. For development and experimentation only. You shouldn't use this in production. Passes the [storage plugin test suite](https://github.com/librarianjs/librarian/blob/master/plugin-tests/storage-plugin.js)

Compatible with Librarian v2.0 and above.

## Installation

```sh
npm install librarian-memory-storage
```

## Usage
```js
var librarian = require('librarian')
var InMemoryStorage = require('librarian-memory-storage')
var app = librarian({
    storage: new InMemoryStorage
})
app.listen(8888)
```

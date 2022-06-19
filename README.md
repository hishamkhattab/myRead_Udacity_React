# React Development Cross-Skilling Nanodegree Program

This is the MyReads: A Book Tracking App project

- start the development server with `npm start`

## Overview

- BooksAPI.js A JavaScript API for the provided Udacity backend. Instructions for the methods are below.

## Installation

-To install app-dependencies:

```
npm install;
```

-To start the server:

```
npm start;
```

## The challenge

Users should be able to:

- See the three book shelfs (read, want to read and currently reading) and the corresponding books for every shelf.
- User can change the state of the books
- User can search for diffrent types of books
- user can see more details for each book

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

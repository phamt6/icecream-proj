## Getting Started

Run in development mode:

```shell
npm run dev
```

Run tests:

```shell
npm run test
yarn test
```

Build:

```shell
npm run build
yarn build
```

## Problem
The Kesko Chocolate and Ice Cream Division requires and API for pricing chocolate orders.
The API receives the number of chocolate bars needed by the user, the prices of bars, packs and boxes,
and the number of bars included in a pack and box.
The API then returns the cheapest combination of boxes, packs and individual bars to satisfy the
requirement, as well as the total price.
You can use any programming language and framework of your choice.
You can use e.g. the following prices and sizes for testing: bar 2.30 €, pack 25.00 € (contains 12 bars), box
230.00 € (contains 120 bars).

## Example request

POST /price

```javascript
{
  "count": 150,
  "barPrice": 2.3,
  "packPrice": 25,
  "boxPrice": 230,
  "packSize": 12,
  "boxSize": 120
}
```

## Example response
200 OK

```javascript
{
  "boxCount": 1,
  "packCount": 2,
  "barCount": 6,
  "totalPrice": 293.8
}
```
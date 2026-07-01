# Flora Backend

- **Swagger UI**: https://umt-backend-n5tm.onrender.com/api-docs

## Quick start

```bash
npm install
cp .env.example .env          # DATABASE_URL points at Docker on port 5433
npm run dev
npm run seed(optional)
```

## API routes

### Bouquet

| Method | Path             | Description                              |
| ------ | ---------------- | ---------------------------------------- |
| GET    | /api/bouquet     | Paginated list (page, per-page)          |
| GET    | /api/bouquet/:id | Get one bouquet by id                    |
| POST   | /api/bouquet     | Create bouquet (img, title, desc, price) |
| PATCH  | /api/bouquet/:id | Partially update bouquet by id           |
| DELETE | /api/bouquet/:id | Delete bouquet by id                     |

### Feedback

| Method | Path              | Description                     |
| ------ | ----------------- | ------------------------------- |
| GET    | /api/feedback     | Get all feedback                |
| GET    | /api/feedback/:id | Get one feedback by id          |
| POST   | /api/feedback     | Create feedback (text, author)  |
| PATCH  | /api/feedback/:id | Partially update feedback by id |
| DELETE | /api/feedback/:id | Delete feedback by id           |

### Order

| Method | Path           | Description                                             |
| ------ | -------------- | ------------------------------------------------------- |
| GET    | /api/order     | Get all orders                                          |
| GET    | /api/order/:id | Get one order by id                                     |
| POST   | /api/order     | Create order (name, phone, address, comment, bouquetId) |
| PATCH  | /api/order/:id | Partially update order by id                            |
| DELETE | /api/order/:id | Delete order by id                                      |

### Bestseller

| Method | Path            | Description         |
| ------ | --------------- | ------------------- |
| GET    | /api/bestseller | Get all bestsellers |

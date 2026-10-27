# koa-pg-3d

A sample full-stack 3D application using:

- Koa
- PostgreSQL
- Angular
- Three.js
- TypeScript

## Architecture

```text
Angular
    ↓
Three.js
    ↓
REST API
    ↓
Koa
    ↓
pg
    ↓
PostgreSQL
```

## Features

- 3D scene rendering
- PostgreSQL-backed scene objects
- Koa REST API
- Angular frontend
- Dynamic object loading
- Texture support
- Lighting support
- Responsive rendering

## Project Structure

```text
koa-pg-3d
├── app.js
├── db.js
├── routers.js
├── package.json
├── config.json
├── schema.sql
├── tsconfig.json
│
├── frontend
│   ├── three-js.component.ts
│   ├── three-js.component.html
│   └── three-js.component.scss
│
├── services
│   └── sceneService.js
│
└── assets
    └── images
```

## Installation

### Clone

```bash
git clone https://github.com/yourname/koa-pg-3d.git
cd koa-pg-3d
```

### Install dependencies

```bash
npm install
```

### Configure PostgreSQL

Create database:

```sql
CREATE DATABASE koa3d;
```

Apply schema:

```bash
psql -U postgres -d koa3d -f schema.sql
```

### Configure Environment

```env
PGHOST=localhost
PGPORT=5432
PGUSER=postgres
PGPASSWORD=password
PGDATABASE=koa3d
```

### Start Backend

```bash
node app.js
```

Expected output:

```text
koa-pg-3d server listening on port 3000
```

### Start Angular Frontend

```bash
ng serve
```

Frontend:

```text
http://localhost:4200
```

API:

```text
http://localhost:3000/api/scene
```

## API

### GET /api/scene

Returns all scene objects.

Example:

```json
[
  {
    "id": 1,
    "type": "cube",
    "pos_x": 0,
    "pos_y": 0,
    "pos_z": 0
  }
]
```

## Database Schema

### scene_objects

| Column | Type |
|----------|----------|
| id | SERIAL |
| name | VARCHAR |
| type | VARCHAR |
| pos_x | FLOAT |
| pos_y | FLOAT |
| pos_z | FLOAT |
| rot_x | FLOAT |
| rot_y | FLOAT |
| rot_z | FLOAT |
| texture | VARCHAR |

## Roadmap

- [ ] Multiple object types
- [ ] GLTF model loading
- [ ] Scene editor
- [ ] Authentication
- [ ] WebSocket synchronization
- [ ] Physics engine
- [ ] Asset manager

## License

MIT

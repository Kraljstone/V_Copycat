# Copycat Backend

This is the backend service for the Copycat application, built with NestJS and PostgreSQL.

## Prerequisites

- Node.js (v16 or higher)
- Docker and Docker Compose
- npm or yarn

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the Backend directory with the following content:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres_user
DB_PASSWORD=postgres_pass
DB_DATABASE=copycat_database
```

## Starting the Application

1. Start the PostgreSQL database using Docker:

```bash
docker-compose up -d
```

2. Start the NestJS application:

```bash
# Development mode with hot-reload
npm run start:dev

# Production mode
npm run start:prod
```

The application will be available at `http://localhost:4000`

## Database Management

- The PostgreSQL database runs on port 5432
- Default credentials:
  - Username: postgres_user
  - Password: postgres_pass
  - Database: copycat_database

To connect to the database directly:

```bash
docker exec -it backend-db-1 psql -U postgres_user -d copycat_database
```

## Troubleshooting

If you encounter connection issues:

1. Make sure Docker is running
2. Verify the database container is up:

```bash
docker ps
```

3. If needed, restart the database:

```bash
docker-compose down
docker-compose up -d
```

4. Check if port 5432 is available:

```bash
lsof -i :5432
```

## Development

```bash
# Run tests
npm run test

# Run e2e tests
npm run test:e2e

# Generate test coverage
npm run test:cov
```

# Copycat Backend

This is the backend service for the Copycat application, built with NestJS and PostgreSQL. The application provides APIs for managing automobile listings, user authentication, and other marketplace features.

## Prerequisites

- Node.js (v16 or higher)
- Docker and Docker Compose
- npm or yarn
- PostgreSQL (if running locally without Docker)

## Project Structure

```
Backend/
├── src/
│   ├── modules/           # Feature modules
│   │   ├── automobiles/   # Automobile listings
│   │   ├── auth/         # Authentication
│   │   ├── home/         # Homepage features
│   │   └── users/        # User management
│   ├── database/         # Database configuration
│   ├── typeorm/          # TypeORM entities
│   └── utils/            # Utility functions and constants
├── test/                 # Test files
└── docker/              # Docker configuration
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the Backend directory with the following content:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres_user
DB_PASSWORD=postgres_pass
DB_DATABASE=copycat_database

# Application Configuration
PORT=4000
NODE_ENV=development
```

## Database Setup

1. Start the PostgreSQL database using Docker:

```bash
docker-compose up -d
```

2. The database will be initialized with the following structure:
   - `trn_automobile_ads`: Automobile listings
   - `users`: User accounts
   - `cfg_automobile_categories`: Vehicle categories
   - `cfg_cities`: Location data
   - `trn_user_views`: Ad view tracking
   - `trn_automobile_ad_images`: Ad images
   - `trn_sponsored_ads`: Sponsored listings

## Starting the Application

1. Development mode with hot-reload:

```bash
npm run start:dev
```

2. Production mode:

```bash
npm run start:prod
```

The application will be available at `http://localhost:4000`

## API Documentation

The API documentation is available at `http://localhost:4000/api` when running in development mode.

## Database Management

### Connection Details

- Host: localhost
- Port: 5432
- Username: postgres_user
- Password: postgres_pass
- Database: copycat_database

### Connect to Database

Using Docker:

```bash
docker exec -it backend-db-1 psql -U postgres_user -d copycat_database
```

Using psql directly:

```bash
psql -h localhost -U postgres_user -d copycat_database
```

## Development

### Running Tests

```bash
# Unit tests
npm run test

# e2e tests
npm run test:e2e

# Test coverage
npm run test:cov
```

### Code Style

The project uses ESLint and Prettier for code formatting. Run:

```bash
npm run lint
npm run format
```

### Database Migrations

```bash
# Generate migration
npm run typeorm migration:generate

# Run migrations
npm run typeorm migration:run
```

## Troubleshooting

### Common Issues

1. Database Connection Issues:

   - Verify Docker is running
   - Check database container status:
     ```bash
     docker ps
     ```
   - Restart database if needed:
     ```bash
     docker-compose down
     docker-compose up -d
     ```

2. Port Conflicts:

   - Check if port 5432 is available:
     ```bash
     lsof -i :5432
     ```
   - Check if port 4000 is available:
     ```bash
     lsof -i :4000
     ```

3. TypeORM View Issues:
   - Drop existing views if recreating:
     ```sql
     DROP VIEW IF EXISTS "automobileLatestAdsView";
     ```
   - Verify view column names match entity definitions

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

This project is licensed under the MIT License.

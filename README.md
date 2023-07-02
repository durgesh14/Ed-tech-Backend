# EdTech Backend
Hosted on Vercel: https://ed-tech-backend.vercel.app

This will start the server at `http://localhost:8000` (replace `8000` with the port you have set up).

## Dependencies

This project uses the following dependencies:

- `axios`: For making HTTP requests
- `bcrypt`: For password hashing
- `cors`: To enable CORS
- `dotenv`: To manage environment variables
- `express`: Web framework
- `jsonwebtoken`: To generate and verify JWTs
- `mongoose`: For modeling and managing MongoDB data

## Endpoints

This server has the following endpoints:

### Register User

- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Data type**: `x-www-form-urlencoded`
- **Required Parameters**:
  - `username`
  - `password`

### Login User

- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Data type**: `x-www-form-urlencoded`
- **Required Parameters**:
  - `username`
  - `password`

### Post Lesson/Section

- **URL**: `/api/lesson/post`
- **Method**: `POST`
- **Data type**: `application/json`
- **Data Parameters**:
  - `sectionId`
  - `title`
  - `text`
  - `videoId` (Youtube video ID)
  - `images` (array of image URLs)
  - `quiz` (object with `questions` array, each question has `question`, `options` array, and `answer`)

### Get Lesson

- **URL**: `/api/lesson/`
- **Method**: `GET`


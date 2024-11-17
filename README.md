# Post & Profile App

This React app fetches and displays user and post data from external APIs. It showcases how to handle asynchronous data fetching, error handling, and displaying data dynamically in a React app. The project includes a "Refresh" feature that allows users to reload user data.

## Features

- Fetches user data from [Random User API](https://randomuser.me).
- Fetches posts data from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts).
- Displays user information including name, profile picture, and address.
- Displays a list of posts with titles and body content.
- Refresh button to reload user data.

## Tech Stack

- React
- JavaScript (ES6+)
- Async/Await for API requests
- Functional Components
- Hooks (`useState`, `useEffect`)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/post-profile-app.git
```

### 2. Install dependencies

Navigate to the project directory and install dependencies:

```bash
cd post-profile-app
npm install
```

### 3. Start the development server

Run the following command to start the app:

```bash
npm start
```

This will launch the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### 4. Build the app for production

To create an optimized build for production:

```bash
npm run build
```

The build will be minified and the filenames will include hashes. Your app is ready to be deployed.

## API Endpoints Used

- [Random User API](https://randomuser.me/api/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts)

## Project Structure

```
/src
  /components
    PostCard.js      // Displays individual post
    UserCard.js      // Displays user information
  /api
    index.js         // Contains API request functions (getPosts, getUser)
  App.js             // Main app component
  index.js           // React entry point
  App.css            // Styles for the app
```

## Error Handling

The app handles errors when fetching data from the APIs. If there is an issue with loading data, an error message will be displayed to the user.

## Refresh Feature

The "Refresh" button fetches new user data when clicked. It uses the same `getUser` function to fetch a new random user from the API.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

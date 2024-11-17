import { useEffect, useState } from "react";
import { getPosts, getUser } from "./api/index";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";

// Loading Component to handle loading state for both posts and user data
const Loading = ({ message }) => <p>{message}</p>;

function App() {
    const [posts, setPosts] = useState([]);  // Store posts data
    const [user, setUser] = useState(null);   // Store user data
    const [error, setError] = useState(null);

    // Fetching posts and user data on initial load
    useEffect(() => {
        // Fetch posts data once when the component mounts
        getPosts()
            .then(setPosts)
            .catch(() => setError("Failed to load posts"));

        // Fetch user data once when the component mounts
        getUser()
            .then((userData) => {
                if (userData && userData.results && userData.results.length > 0) {
                    setUser(userData.results[0]);
                } else {
                    setError("Failed to load user data");
                }
            })
            .catch(() => setError("Failed to load user data"));
    }, []);

    // Handle refreshing both posts and user data (Simulating a full page reload)
    const refreshData = async () => {
        try {
            // Reset posts and user state before fetching again
            setPosts([]);
            setUser(null);
            setError(null);

            // Re-fetch user data
            const userData = await getUser();
            if (userData && userData.results && userData.results.length > 0) {
                setUser(userData.results[0]);
            } else {
                setError("Failed to refresh user data");
            }

            // Re-fetch posts data
            const postsData = await getPosts();
            setPosts(postsData);
        } catch (error) {
            setError("Failed to refresh data");
        }
    };

    // Render loading or error states
    return (
        <div className="App">
            {error && <p className="error">{error}</p>} {/* Show error message if there's an issue */}

            {/* User data */}
            {!error && !user ? (
                <Loading message="Loading User..." />
            ) : (
                user ? (
                    <UserCard userData={user} />
                ) : (
                    <p>User data is unavailable</p>  // Show message when user data is not available
                )
            )}

            {/* Refresh button */}
            <button onClick={refreshData}>Refresh Data</button>

            {/* Posts data */}
            {!error && posts.length === 0 ? (
                <Loading message="Loading Posts..." />
            ) : (
                posts.map(post => <PostCard key={post.id} title={post.title} body={post.body} />)
            )}
        </div>
    );
}

export default App;

// Fetch posts data
export const getPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "GET",
        });

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        return await response.json(); // Return parsed JSON if successful
    } catch (error) {
        console.error("Error fetching posts:", error); // Log error to console
        throw error; // Rethrow the error so it can be handled by the calling function
    }
};

// Fetch user data
export const getUser = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/', {
            method: "GET",
        });

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error("Failed to fetch user data");
        }

        return await response.json(); // Return parsed JSON if successful
    } catch (error) {
        console.error("Error fetching user data:", error); // Log error to console
        throw error; // Rethrow the error so it can be handled by the calling function
    }
};

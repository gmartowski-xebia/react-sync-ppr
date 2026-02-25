export default async function DetailsCount() {
    await new Promise(resolve => setTimeout(resolve, 1500));
    const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
    const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
    const users = await usersRes.json();
    const posts = await postsRes.json();

    return (
        <>
            <span>Users: {users.length}</span>
            <span>Posts: {posts.length}</span>
        </>
    );
}

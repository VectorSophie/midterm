interface Post {
    postId: number;
    title: string;
    comments: Comment[];
}

interface Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}
export const getPosts = async (userId: number): Promise<{ state: 'fulfilled'; result: Post[] } | { state: 'rejected'; reason: Error }> => {
    try {
        const posts_comments: { postId: number; title: string; comments: Comment[] }[] = [];
        const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(res => res.json());
        for (const { id, title } of posts) {
            const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(res => res.json());
            posts_comments.push({
                postId: id,
                title,
                comments,
            });
        }
        return { state: 'fulfilled', result: posts_comments };
    } catch (error) {
        return { state: 'rejected', reason: error as Error };
    }
};

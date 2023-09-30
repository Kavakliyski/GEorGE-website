interface Post {
    title: string;
    content: string;
}

interface PostsData {
    edges: {
        node: Post;
    }[];
}

export interface PagePropsData {
    posts: PostsData;
}

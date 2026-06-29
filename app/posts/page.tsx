interface Post {
  id: number;
  title: string;
}

// ページコンポーネントをasync関数として定義
async function PostsPage() {
  // データを直接fetch
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // Next.jsのキャッシュオプション（後述）
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const posts: Post[] = await res.json();

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}

export default PostsPage;

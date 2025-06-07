import { getPosts } from "@/lib/api";

export default async function HomePage() {
  const posts = await getPosts();

  type Post = {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Blog do Laboratório</h1>
      <ul className="space-y-4">
        {posts.map((post: Post) => (
          <li key={post._id}>
            <a
              className="text-blue-600 hover:underline"
              href={`/posts/${post.slug.current}`}
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

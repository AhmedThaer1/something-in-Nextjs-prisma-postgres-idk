import Posts from "@/components/share/Posts";
import prisma from "@/lib/prisma";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="flex bg-black text-white min-h-screen flex-col items-center justify-center p-24">
      <h1 className="font-bold text-2xl">Feed</h1>
      {posts.map((post) => (
        <Posts
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          authorName={post.author.name}
        />
      ))}
    </main>
  );
}

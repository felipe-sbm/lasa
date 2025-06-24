import { getPosts } from "@/lib/blogger";
import Image from "next/image";
import Link from "next/link";
import BlogPosts from "@/components/BlogPosts";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="relative p-6 min-h-screen">
      <section>
        <div className="mx-auto pb-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-lasa p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="flex items-center justify-center h-full min-h-[300px]">
                <div className="mx-auto max-w-xl text-center">
                  <h2 className="text-2xl font-bold text-white md:text-3xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                  </h2>

                  <p className="hidden text-white/90 sm:mt-4 sm:block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                    egestas tempus tellus etiam sed. Quam a scelerisque amet
                    ullamcorper eu enim et fermentum, augue. Aliquet amet
                    volutpat quisque ut interdum tincidunt duis.
                  </p>

                  <div className="mt-4 md:mt-8">
                    <Link
                      href="/posts"
                      id="button-primary"
                      className="inline-block border px-12 py-3 text-sm font-medium focus:ring-3 focus:ring-green-700 focus:outline-hidden focus:text-white"
                    >
                      Ver publicações
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <Image
                alt="Folhas de árvores"
                src="https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
                height={600}
                width={400}
              />

              <Image
                alt="Uma floresta densa"
                src="https://images.pexels.com/photos/19289108/pexels-photo-19289108/free-photo-of-close-up-of-capybaras-lying-on-the-grass.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
                height={600}
                width={400}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto">
        <BlogPosts posts={posts} />
      </div>
    </main>
  );
}

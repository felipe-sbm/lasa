import Head from "next/head";
import FacebookComments from "@/components/FacebookComments";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <meta property="fb:app_id" content="6650706508671478711" />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="prose prose-lg dark:prose-invert">
          {children}
          <FacebookComments />
        </div>
      </main>
    </>
  );
}

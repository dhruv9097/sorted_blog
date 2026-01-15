import { getPostData } from '../../../lib/posts';

export default async function Post({ params }: { params: { id: string } }) {
  // Wait for the params to be ready (Next.js requirement)
  const { id } = await params;
  
  // Fetch the post data
  const postData = await getPostData(id);

  return (
    <article className="max-w-2xl mx-auto mt-10">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">{postData.title}</h1>
        <div className="text-gray-500 dark:text-gray-400 font-mono text-sm">{postData.date}</div>
      </header>
      
      {/* This renders the Markdown HTML */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  );
}
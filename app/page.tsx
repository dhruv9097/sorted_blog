import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="space-y-12 "> 
      
      {/* Profile Section */}
      <section className="flex flex-col-reverse sm:flex-row justify-between items-start gap-8">
        <div className="space-y-4 max-w-lg">
          <h1 className="text-3xl font-bold">DHRUV</h1> 
          <p className="text-gray-400 leading-relaxed">
            I'm a product designer and founder building cool things. 
          </p>
        </div>
        <div className="w-24 h-24 rounded-full bg-gray-800 flex-shrink-0 border-2 border-gray-700 shadow-sm"></div>
      </section>

      <hr className="border-gray-800" />

      {/* Dynamic Writing Section */}
      <section>
        <h2 className="font-bold text-xl mb-6">Writing</h2>
        <div className="space-y-5">
          
          {/* Loop through the posts */}
          {allPostsData.map(({ id, date, title }) => (
            <Link href={`/posts/${id}`} key={id} className="block group">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg group-hover:underline decoration-gray-500 underline-offset-4">
                  {title}
                </h3>
                <span className="text-sm text-gray-500 font-mono">{date}</span>
              </div>
            </Link>
          ))}

        </div>
      </section>

    </div>
  );
}
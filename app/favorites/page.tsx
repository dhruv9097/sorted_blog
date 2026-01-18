import { ArrowUpRight } from 'lucide-react';

export default function Favorites() {
  return (
    <div className="space-y-12">
      
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold mb-4">Favorites</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed italic">
          A curated collection of tools, books, and software I use to build things.
        </p>
      </section>

      {/* The Signature Dots */}
      <div className="flex justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Section 1: Software */}
        <section className="space-y-8">
          <h2 className="font-bold text-xl border-b border-gray-200 dark:border-gray-800 pb-2">Software</h2>
          <div className="space-y-6">
            <FavoriteItem 
              title="VS Code"
              desc="My daily code editor. Theme: Vesper."
              link="https://code.visualstudio.com"
            />
            <FavoriteItem 
              title="Figma"
              desc="Where all design happens before code."
              link="https://figma.com"
            />
            <FavoriteItem 
              title="Raycast"
              desc="Spotlight on steroids. A must-have for Mac."
              link="https://raycast.com"
            />
             <FavoriteItem 
              title="Notion"
              desc="Second brain for notes and project management."
              link="https://notion.so"
            />
          </div>
        </section>

        {/* Section 2: Books & Media */}
        <section className="space-y-8">
          <h2 className="font-bold text-xl border-b border-gray-200 dark:border-gray-800 pb-2">Books</h2>
          <div className="space-y-6">
            <FavoriteItem 
              title="Show Your Work"
              desc="by Austin Kleon. A guide to sharing creativity."
              link="https://austinkleon.com/show-your-work"
            />
            <FavoriteItem 
              title="Refactoring UI"
              desc="by Adam Wathan. How to design without being a designer."
              link="https://refactoringui.com"
            />
            <FavoriteItem 
              title="Deep Work"
              desc="by Cal Newport. Rules for focused success."
              link="#"
            />
          </div>
        </section>

      </div>
    </div>
  );
}

// Helper Component for consistent items
function FavoriteItem({ title, desc, link }: { title: string, desc: string, link: string }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="flex items-baseline gap-2 mb-1">
        <h3 className="font-bold text-lg group-hover:underline decoration-gray-400 underline-offset-4">
          {title}
        </h3>
        <ArrowUpRight size={14} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm font-sans">
        {desc}
      </p>
    </a>
  )
}
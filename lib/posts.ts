import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // 1. Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map((fileName) => {
    // 2. Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, '');

    // 3. Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 4. Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // 5. Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  
  // 6. Sort posts by date
  return allPostsData.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });
}


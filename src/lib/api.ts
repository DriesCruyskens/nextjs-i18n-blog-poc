import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import BlogPost from "../types/BlogPost";

const blogPostDirectory = join(process.cwd(), "src/content/blog");

export function getBlogPostSlugs(): string[] {
  return fs.readdirSync(blogPostDirectory);
}

export function getBlogPostBySlug(slug: string, metadataOnly: boolean = false): BlogPost {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(blogPostDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const blogPost: BlogPost = {
      slug: data.slug,
      title: data.title,
      date: data.date,
      ...(!metadataOnly && {content: content})
  }

  return blogPost;
}

export const getAllBlogPosts = (metadataOnly: boolean = false): BlogPost[] => {
    const slugs = getBlogPostSlugs();
    const posts = slugs
      .map((slug) => getBlogPostBySlug(slug, metadataOnly))
      // sort blogposts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
};
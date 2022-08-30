import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ReactMarkdown from "react-markdown";
import BlogPost from "../../types/BlogPost";
import { getAllBlogPosts, getBlogPostBySlug } from "../../lib/api";

type Props = {
  post: BlogPost;
};

const blogPost: NextPage<Props> = ({ post }) => {
  return (
    <div className="w-4/5 m-auto my-10">
      <h1 className="text-2xl mb-5">{post.title}</h1>
      <ReactMarkdown>{post.content!}</ReactMarkdown>
    </div>
  );
};

type Params = {
  slug: string;
};

/// get all posts
export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const post: BlogPost = getBlogPostBySlug(params!.slug);

  // Pass post data to the page via props
  return { props: { post } };
};

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts: BlogPost[] = getAllBlogPosts(true);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths: blogPosts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default blogPost;

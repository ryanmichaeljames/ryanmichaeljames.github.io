import samplePost from "../posts/sample-post.md?raw";

export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "sample-post",
    title: "Sample Post",
    date: "Jan 2026",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: samplePost,
  },
];

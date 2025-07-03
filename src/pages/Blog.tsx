import { useParams } from 'react-router-dom';
import blogs from '../data/blogs.json';

interface Blog { title: string; date: string; content: string; }

const Blog = () => {
  const { title } = useParams();
  const blog = blogs.find((b: Blog) => b.title === decodeURIComponent(title || ''));

  if (!blog) {
    return <div>未找到该博客</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      <div>{blog.content}</div>
    </div>
  );
};

export default Blog;
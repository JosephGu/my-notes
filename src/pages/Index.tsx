import { Link } from 'react-router-dom';
import blogs from '../data/blogs.json';
import './index.sass';

const Index = () => {
  return (
    <div>
      <h1>Blog List</h1>
      <ul className='blogs-link'>
        {blogs.map((blog) => (
          <li key={blog.title}>
            <Link to={`/blog/${encodeURIComponent(blog.title)}`} >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
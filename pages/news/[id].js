import Layout from '../../components/layout/layout';
import axios from 'axios';
import utilStyles from '../../styles/utils.module.css';
import ReactMarkdown from 'react-markdown/with-html';
import style from '../../styles/BlogPage.module.scss';
import { motion } from 'framer-motion';

const BlogPage = ({ post }) => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={utilStyles.container}
      >
        <h1 className={utilStyles['page-header']}>{post.title}</h1>
        <p>{`${post.date} by ${post.author}`}</p>
        <img
          src={'https://still-sierra-03037.herokuapp.com' + post.image.url}
          alt=''
          className={style.post_image}
        />
        <div className={style.post_content}>
          <ReactMarkdown source={post.content} />
        </div>
      </motion.div>
    </Layout>
  );
};

BlogPage.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(
    `https://still-sierra-03037.herokuapp.com/blog-posts/${id}`
  );
  const post = await res.json();

  return { post };
};

export default BlogPage;

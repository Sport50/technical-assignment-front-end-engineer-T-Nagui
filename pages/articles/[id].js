import Image from 'next/image';
import Link from 'next/link';
import Meta from '../../components/Meta';
import { server } from '../../config';

const ArticlePage = ({ article }) => {
  const { body, title, author } = article;

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <figure className=' bg-slate-100 rounded-xl p-8'>
        <Image
          className='rounded-full mx-auto'
          src='/img/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg'
          alt={title}
          width='100'
          height='100'
        />
        <div className='pt-6  text-center md:text-left space-y-4'>
          <blockquote>
            <p className='text-lg font-medium'>{body}</p>
          </blockquote>
          <figcaption className='font-medium'>
            <div className='text-sky-500 dark:text-sky-400'>Title: {title}</div>
            <div className='text-slate-700 dark:text-slate-500'>
              Author: {author}
            </div>
          </figcaption>
        </div>
      </figure>
      <br />
      <Link href='/'>
        <a className='text-red-900 hover:text-red-800 mt-5'>Go Back</a>
      </Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article
    }
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  };
};

export default ArticlePage;

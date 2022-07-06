import Image from 'next/image';
import Link from 'next/link';

const ArticleItem = ({ article }) => {
  const { excerpt, title, author, id } = article;
  return (
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
          <p className='text-lg font-medium'>{excerpt}</p>
        </blockquote>
        <figcaption className='font-medium'>
          <div className='text-sky-500 dark:text-sky-400'>Title: {title}</div>
          <div className='text-slate-700 dark:text-slate-500'>
            Author: {author}
          </div>
        </figcaption>
      </div>
      <Link href={`/articles/${id}`}>
        <a className='text-blue-900 hover:text-blue-800 mt-5'>readMore</a>
      </Link>
    </figure>
  );
};

export default ArticleItem;

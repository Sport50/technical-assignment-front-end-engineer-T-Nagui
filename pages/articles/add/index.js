import Meta from '../../../components/Meta';
import { server } from '../../../config';
import { useRouter } from 'next/router';

const AddArticle = () => {
  const router = useRouter();

  const submitContact = async (event) => {
    event.preventDefault();
    const formData = event.target;
    const author = formData.author.value;
    const title = formData.title.value;
    const body = formData.body.value;
    const res = await fetch(`${server}/api/articles/add`, {
      body: JSON.stringify({
        author,
        title,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
    const data = await res.json();
    console.log('res?.article', data);
    if (data?.article) {
      router.push(`/articles/${data.article}`);
    }
  };

  return (
    <div className='flex items-center justify-center'>
      <Meta title='add article' keywords='' description='add article' />

      <div className='w-3/5 my-5 overflow-hidden rounded shadow-lg'>
        <div className='px-6 py-4'>
          <div className='mb-2 text-xl font-bold'>Add article</div>
          <form className='flex flex-col' onSubmit={submitContact}>
            <label htmlFor='author' className='mb-2 italic'>
              Author Email
            </label>
            <input
              className='mb-4 border-b-2'
              id='author'
              name='author'
              type='email'
              autoComplete='off'
              required
            />
            <label htmlFor='title' className='mb-2 italic'>
              Title
            </label>
            <input
              className='mb-4 border-b-2'
              id='title'
              name='title'
              type='text'
              autoComplete='off'
              required
            />
            <label htmlFor='body' className='mb-2 italic'>
              body
            </label>
            <textarea
              cols={3}
              rows={4}
              className='mb-4 border-b-2'
              id='body'
              name='body'
              required
            ></textarea>
            <button
              type='submit'
              className='px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArticle;

import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='mb-5 mt-5 mx-auto'>
      <ul className='flex'>
        <li className='mr-6'>
          <Link href='/'>
            <a className='text-blue-900 hover:text-blue-800'> Home</a>
          </Link>
        </li>
        <li className='mr-6'>
          <Link href='/articles/add'>
            <a className='text-blue-900 hover:text-blue-800'> add Articles</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

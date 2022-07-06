import Nav from './Nav';
import Meta from './Meta';

const Layout = ({ children }) => {
  return (
    <div className='container mx-auto self-center'>
      <Meta />
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

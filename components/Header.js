import Link from 'next/link';
import NProgress from 'nprogress';
import Router from 'next/router';
Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
  <div>
    <Link href="/"><a>index page</a></Link>  
  </div>
);

export default Header;

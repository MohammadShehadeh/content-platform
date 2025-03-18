import Link from 'next/link';

import { Breadcrumb, BreadcrumbItem } from '@/components/shared/breadcrumb';

const Home = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem current>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Home;

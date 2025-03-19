import { render, screen } from '@testing-library/react';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/components/shared/breadcrumb';

describe('Breadcrumb', () => {
  it('should render breadcrumb items correctly', () => {
    render(
      <Breadcrumb>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbLink href="/posts">Posts</BreadcrumbLink>
        <BreadcrumbItem current>Post Details</BreadcrumbItem>
      </Breadcrumb>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Posts')).toBeInTheDocument();
    expect(screen.getByText('Post Details')).toBeInTheDocument();
  });

  it('should render with custom separator', () => {
    render(
      <Breadcrumb separator=">">
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbItem current>Posts</BreadcrumbItem>
      </Breadcrumb>
    );

    expect(screen.getByText('>')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbItem current>Posts</BreadcrumbItem>
      </Breadcrumb>
    );

    expect(container).toMatchSnapshot();
  });
});

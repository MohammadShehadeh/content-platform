import { render, screen } from '@testing-library/react';

import { PostCard } from '@/components/post-card';

describe('PostCard', () => {
  it('should render with all props correctly', () => {
    render(<PostCard title="Test Title" body="Test Body" id={42} className="custom-class" />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Body')).toBeInTheDocument();
    expect(screen.getByText('View Post')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/posts/42');
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard title="Hello" body="Hello" id={1} />);
    expect(container).toMatchSnapshot();
  });
});

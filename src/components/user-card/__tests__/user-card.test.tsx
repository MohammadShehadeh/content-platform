import { render, screen } from '@testing-library/react';

import { UserCard } from '@/components/user-card';

describe('UserCard', () => {
  it('should render user information correctly', () => {
    render(<UserCard name="John Doe" email="john@example.com" id={1} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('View User')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/users/1');
  });

  it('should render with custom className', () => {
    const { container } = render(
      <UserCard name="Jane Smith" email="jane@example.com" id={2} className="custom-card" />
    );
    expect(container.firstChild).toHaveClass('custom-card');
  });

  it('should match snapshot', () => {
    const { container } = render(<UserCard name="John Doe" email="john@example.com" id={1} />);
    expect(container).toMatchSnapshot();
  });
});

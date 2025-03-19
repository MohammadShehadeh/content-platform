import { render, screen } from '@testing-library/react';

import { Comments } from '@/components/comments';

describe('Comments', () => {
  it('should render with all props correctly', () => {
    render(<Comments name="John Doe" email="john.doe@example.com" body="This is a comment" />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByText('This is a comment')).toBeInTheDocument();
  });

  it('should render with different content', () => {
    render(
      <Comments name="Jane Smith" email="jane.smith@example.com" body="Another comment here" />
    );

    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('jane.smith@example.com')).toBeInTheDocument();
    expect(screen.getByText('Another comment here')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(
      <Comments name="John Doe" email="john.doe@example.com" body="This is a comment" />
    );

    expect(container).toMatchSnapshot();
  });
});

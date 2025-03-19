import { render, screen } from '@testing-library/react';

import { Container } from '@/components/container';

describe('Container', () => {
  it('should render children correctly', () => {
    render(<Container>Test Content</Container>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(<Container className="custom-container">Hello</Container>);
    expect(container.firstChild).toHaveClass('custom-container');
  });

  it('should match snapshot', () => {
    const { container } = render(<Container>Hello</Container>);
    expect(container).toMatchSnapshot();
  });
});

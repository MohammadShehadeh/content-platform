import { render, screen } from '@testing-library/react';

import { Title } from '@/components/title';

describe('Title', () => {
  it('matches snapshot', () => {
    const { container } = render(<Title>Hello</Title>);

    expect(container).toMatchSnapshot();
  });

  it('should render with children', () => {
    render(<Title>Hello</Title>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('should render with custom className', () => {
    render(<Title className="custom-class">Hello</Title>);
    expect(screen.getByText('Hello')).toHaveClass('custom-class');
  });

  it('should render with different size variants', () => {
    render(<Title size="sm">Small</Title>);
    render(<Title size="md">Medium</Title>);
    render(<Title size="lg">Large</Title>);

    expect(screen.getByText('Small')).toHaveClass('sm');
    expect(screen.getByText('Medium')).toHaveClass('md');
    expect(screen.getByText('Large')).toHaveClass('lg');
  });
});

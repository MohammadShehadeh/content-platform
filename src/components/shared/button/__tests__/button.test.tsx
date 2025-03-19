import { render, screen } from '@testing-library/react';

import { Button } from '@/components/shared/button';

describe('Button', () => {
  it('should render with children', () => {
    render(<Button>Hello</Button>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('should render with custom className', () => {
    render(<Button className="custom-button">Hello</Button>);
    expect(screen.getByText('Hello')).toHaveClass('custom-button');
  });

  it('should render with different size variants', () => {
    render(<Button size="sm">Small</Button>);
    render(<Button size="md">Medium</Button>);
    render(<Button size="lg">Large</Button>);

    expect(screen.getByText('Small')).toHaveClass('sm');
    expect(screen.getByText('Medium')).toHaveClass('md');
    expect(screen.getByText('Large')).toHaveClass('lg');
  });

  it('should render with different variant variants', () => {
    render(<Button variant="primary">Primary</Button>);
    render(<Button variant="secondary">Secondary</Button>);
    render(<Button variant="ghost">Ghost</Button>);
    render(<Button variant="link">Link</Button>);
    render(<Button variant="outline">Outline</Button>);

    expect(screen.getByText('Primary')).toHaveClass('primary');
    expect(screen.getByText('Secondary')).toHaveClass('secondary');
    expect(screen.getByText('Ghost')).toHaveClass('ghost');
    expect(screen.getByText('Link')).toHaveClass('link');
    expect(screen.getByText('Outline')).toHaveClass('outline');
  });

  it('should match snapshot', () => {
    const { container } = render(<Button>Hello</Button>);

    expect(container).toMatchSnapshot();
  });
});

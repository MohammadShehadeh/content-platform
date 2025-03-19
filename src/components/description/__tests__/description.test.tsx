import { render, screen } from '@testing-library/react';

import { Description } from '@/components/description';

describe('Description', () => {
  it('should render children correctly', () => {
    render(<Description>Hello World</Description>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('should apply size variants correctly', () => {
    const { rerender } = render(<Description size="sm">Small</Description>);
    expect(screen.getByText('Small')).toHaveClass('sm');

    rerender(<Description size="lg">Large</Description>);
    expect(screen.getByText('Large')).toHaveClass('lg');
  });

  it('should apply color variants correctly', () => {
    const { rerender } = render(<Description color="default">Default</Description>);
    expect(screen.getByText('Default')).toHaveClass('default');

    rerender(<Description color="muted">Muted</Description>);
    expect(screen.getByText('Muted')).toHaveClass('muted');
  });

  it('should apply disableGutter prop correctly', () => {
    render(<Description disableGutter>No Gutter</Description>);
    expect(screen.getByText('No Gutter')).toHaveClass('disableGutter');
  });

  it('should apply custom className', () => {
    render(<Description className="custom-description">Custom Class</Description>);
    expect(screen.getByText('Custom Class')).toHaveClass('custom-description');
  });

  it('should render as child component when asChild is true', () => {
    render(
      <Description asChild>
        <span data-testid="child-span">As Child</span>
      </Description>
    );
    expect(screen.getByTestId('child-span')).toBeInTheDocument();
    expect(screen.getByText('As Child')).toHaveClass('description');
  });

  it('should match snapshot', () => {
    const { container } = render(<Description>Hello</Description>);
    expect(container).toMatchSnapshot();
  });
});

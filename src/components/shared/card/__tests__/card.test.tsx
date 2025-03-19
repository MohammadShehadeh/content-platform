import { render, screen } from '@testing-library/react';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/shared/card';

describe('Card', () => {
  it('should render with children', () => {
    render(<Card>Hello</Card>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Card>Hello</Card>);

    expect(container).toMatchSnapshot();
  });

  it('should render a complete card with all subcomponents', () => {
    const { container } = render(
      <Card className="test-card">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>This is a card description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the main content of the card</p>
        </CardContent>
        <CardFooter>
          <button>Action Button</button>
        </CardFooter>
      </Card>
    );

    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('This is a card description')).toBeInTheDocument();
    expect(screen.getByText('This is the main content of the card')).toBeInTheDocument();
    expect(screen.getByText('Action Button')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('test-card');
    expect(container).toMatchSnapshot();
  });
});

import { render, screen } from '@testing-library/react';

import { UserDetails } from '@/components/user-details';

describe('UserDetails', () => {
  const mockUser = {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    phone: '555-1234',
    website: 'example.com',
    address: {
      street: '123 Main St',
      suite: 'Apt 4',
      city: 'New York',
      zipcode: '10001',
      geo: { lat: '40.7128', lng: '-74.0060' },
    },
    company: {
      name: 'Example Corp',
      catchPhrase: 'Making examples since 2023',
      bs: 'innovative solutions',
    },
  };

  it('should render user information correctly', () => {
    render(<UserDetails user={mockUser} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('@johndoe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('555-1234')).toBeInTheDocument();
    expect(screen.getByText('example.com')).toBeInTheDocument();
    expect(screen.getByText('Example Corp')).toBeInTheDocument();
    expect(screen.getByText('123 Main St, Apt 4 New York, 10001')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<UserDetails user={mockUser} />);
    expect(container).toMatchSnapshot();
  });
});

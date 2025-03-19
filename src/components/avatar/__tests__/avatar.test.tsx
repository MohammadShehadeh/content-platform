import { render, screen } from '@testing-library/react';

import { Avatar } from '@/components/avatar';

describe('Avatar', () => {
  it('should render with custom className', () => {
    render(<Avatar className="custom-avatar" />);
    const avatarElement = screen.getByTestId('avatar');
    expect(avatarElement).toHaveClass('custom-avatar');
  });

  it('should match snapshot', () => {
    const { container } = render(<Avatar />);
    expect(container).toMatchSnapshot();
  });
});

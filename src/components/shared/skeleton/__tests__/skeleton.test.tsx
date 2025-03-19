import { render, screen } from '@testing-library/react';

import { Skeleton } from '@/components/shared/skeleton';

describe('Skeleton', () => {
  it('should render with children', () => {
    render(<Skeleton />);
    expect(screen.getByRole('skeleton')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Skeleton />);
    expect(container).toMatchSnapshot();
  });
});

import { render, screen } from '@testing-library/react';

import { Separator } from '@/components/shared/separator';

describe('Separator', () => {
  it('should render with children', () => {
    render(<Separator />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Separator />);
    expect(container).toMatchSnapshot();
  });
});

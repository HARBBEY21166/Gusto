import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn(
        "font-headline text-3xl font-bold text-foreground tracking-tight",
        className
      )}
    >
      Gusto
    </Link>
  );
};

export default Logo;

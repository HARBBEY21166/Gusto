import Link from 'next/link';
import { cn } from '@/lib/utils';
import GustoLogo from './gusto-logo';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn(
        "text-foreground",
        className
      )}
    >
      <GustoLogo className="h-8 w-auto text-foreground" />
      <span className="sr-only">Gusto Home</span>
    </Link>
  );
};

export default Logo;

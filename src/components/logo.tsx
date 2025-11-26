import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import GustoLogo from '@/Gusto-logo.svg';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center text-foreground",
        className
      )}
    >
      <Image 
        src={GustoLogo} 
        alt="Gusto Logo" 
        className="h-8 w-auto"
        priority
      />
      <span className="sr-only">Gusto Home</span>
    </Link>
  );
};

export default Logo;

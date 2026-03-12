import { cn } from '@/lib/utils';
import { Link } from '@/lib/inertia-shims';
import { ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof Link>;

export const TextLink = ({ className = '', children, ...props }: LinkProps) => {
    return (
        <Link
            className={cn(
                'text-foreground decoration-neutral-300 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500 text-amber-400 hover:underline underline-offset-4',
                className,
            )}
            {...props}
        >
            {children}
        </Link>
    );
}

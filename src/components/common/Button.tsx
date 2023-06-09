import { cn } from '../../utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors  disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
  {
    variants: {
      variant: {
        default:
          'text-gray-700 hover:text-black inline-flex items-center justify-center rounded-[5px] bg-white py-3 px-6 text-center text-base font-medium',
        primary:
          'bg-primary inline-flex items-center justify-center rounded-md py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10',
        destructive:
          'bg-warning inline-flex items-center justify-center rounded-md py-4 px-10 text-center text-base font-normal text-white hover:bg-danger lg:px-8 xl:px-10',
        destructiveOutline:
          'text-danger border-warning hover:bg-danger hover:border-danger inline-flex items-center justify-center rounded-md border py-4 px-10 text-center text-base transition hover:text-white lg:px-8 xl:px-10',
        outline:
          'text-primary border-primary hover:bg-primary hover:border-primary inline-flex items-center justify-center rounded-md border py-4 px-10 text-center text-base transition hover:text-white lg:px-8 xl:px-10',
        subtle:
          'text-secondary hover:text-primary inline-flex items-center justify-center rounded-[5px] bg-white py-3 px-6 text-center text-base font-medium',
        ghost:
          'text-gray-400 border-gray-400  hover:border-gray-800 hover:text-gray-800  inline-flex items-center justify-center rounded-md border py-4 px-10 text-center text-base transition lg:px-8 xl:px-10',
        link: 'opacity-60 hover:shadow-xl rounded-full hover:opacity-100',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonStylesProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStylesProps {
  href?: string;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, disabled, ...props }, ref) => {
    if (href) {
      return (
        <a target="_blank" href={href} className={cn(buttonVariants({ variant, size, className }))}>
          {children}
        </a>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={disabled}
      >
        {children}
      </button>
    );
  },
);

export default Button;

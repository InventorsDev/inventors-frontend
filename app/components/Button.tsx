type ButtonProps = {
	children: React.ReactNode;
	greenTransparent?: boolean;
	whiteTransparent?: boolean;
	transparent?: boolean;
	className?: string;
	buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

const Button = ({
	children,
	greenTransparent = false,
	whiteTransparent = false,
	transparent = false,
	className,
	buttonProps,
}: ButtonProps) => {
	return (
		<button
			className={`${className} px-6 py-4 rounded text-sm ${
				transparent
					? 'bg-transparent border-[1px]'
					: 'bg-primary-green text-white'
			} ${greenTransparent ? 'text-primary-green border-primary-green' : ''}
			${whiteTransparent ? 'text-white border-white' : ''}`}
			{...buttonProps}
		>
			{children}
		</button>
	);
};

export default Button;

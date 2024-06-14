import { BsArrowUpRight } from 'react-icons/bs';
import Link from 'next/link';

type ButtonProps = {
	text?: string;
	greenTransparent?: boolean;
	whiteTransparent?: boolean;
	transparent?: boolean;
	arrow?: boolean;
	href: string;
};

const Button = ({
	text = 'Get Started',
	greenTransparent = false,
	whiteTransparent = false,
	transparent = false,
	arrow = true,
	href,
}: ButtonProps) => {
	return (
		<Link
			href={href}
			className={`gap-2 items-center px-6 py-4 rounded inline-flex text-sm ${
				transparent
					? 'bg-transparent border-[1px]'
					: 'bg-primary-green text-white'
			} ${greenTransparent ? 'text-primary-green border-primary-green' : ''}
			${whiteTransparent ? 'text-white border-white' : ''}`}
		>
			<span>{text}</span>
			{arrow && <BsArrowUpRight />}
		</Link>
	);
};

export default Button;

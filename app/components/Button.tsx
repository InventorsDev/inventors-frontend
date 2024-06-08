import { BsArrowUpRight } from 'react-icons/bs';
import Link from 'next/link';

type ButtonProps = {
	text?: string;
	bgColor?: string;
	textColor?: string;
	arrow?: boolean;
	navBtn?: boolean;
	href: string;
};

const Button = ({
	text = 'Get Started',
	bgColor = 'primary-green',
	textColor = 'white',
	arrow = true,
	navBtn = false,
	href,
}: ButtonProps) => {
	const bg_color =
		bgColor === 'primary-green' ? 'bg-primary-green' : 'bg-light-btn';
	const text_color =
		textColor === 'white' ? 'text-white' : 'text-primary-green';

	return (
		<Link
			href={href}
			className={`flex gap-2 items-center ${bg_color} ${text_color} px-8 rounded inline-flex text-base ${
				navBtn ? 'py-3' : 'py-4'
			}`}
		>
			<span>{text}</span>
			{arrow && <BsArrowUpRight />}
		</Link>
	);
};

export default Button;

import { BsArrowUpRight } from 'react-icons/bs';
import Link from 'next/link';

type ButtonProps = {
	text?: string;
	bgColor?: string;
	textColor?: string;
	arrow?: boolean;
	navBtn?: boolean;
	transparent?: boolean;
	borderColor?: string;
	href: string;
};

const Button = ({
	text = 'Get Started',
	bgColor = 'primary-green',
	textColor = 'white',
	arrow = true,
	navBtn = false,
	transparent = false,
	borderColor = 'primary-green',
	href,
}: ButtonProps) => {
	const bg_color = `bg-${bgColor}`;
	const text_color = `text-${textColor}`;
	const border_color = `border-[1px] border-${borderColor}`;

	return (
		<Link
			href={href}
			className={`flex gap-2 items-center ${text_color} ${border_color} px-6 rounded inline-flex text-sm ${
				navBtn ? 'py-2' : 'py-3'
			} ${transparent ? 'bg-transparent' : bg_color}`}
		>
			<span>{text}</span>
			{arrow && <BsArrowUpRight />}
		</Link>
	);
};

export default Button;

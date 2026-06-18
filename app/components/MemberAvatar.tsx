'use client';

import { useState } from 'react';

type Props = {
	name: string;
	profilePic?: string;
	className?: string;
};

const MemberAvatar = ({ name, profilePic, className = '' }: Props) => {
	const [error, setError] = useState(false);
	const initial = name.charAt(0).toUpperCase();

	if (profilePic && !error) {
		return (
			// eslint-disable-next-line @next/next/no-img-element
			<img
				src={profilePic}
				alt={name}
				className={`object-cover ${className}`}
				onError={() => setError(true)}
			/>
		);
	}

	return (
		<div
			className={`bg-[#1a3330] flex items-center justify-center ${className}`}
		>
			<span className="text-5xl font-semibold text-[#AFB4C2]">{initial}</span>
		</div>
	);
};

export default MemberAvatar;

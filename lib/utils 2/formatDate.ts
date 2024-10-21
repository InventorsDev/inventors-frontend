export const formatDate = (dateString: string): string => {
	const date: Date = new Date(dateString);

	// Get day, month, and year
	const day: number = date.getUTCDate();
	const month: number = date.getUTCMonth(); // Months are zero-indexed
	const year: number = date.getUTCFullYear();

	// Array of month abbreviations
	const monthNames: string[] = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	// Get the ordinal suffix for the day
	function getOrdinalSuffix(day: number): string {
		if (day > 3 && day < 21) return 'th'; // Applies to 11th - 19th
		switch (day % 10) {
			case 1:
				return 'st';
			case 2:
				return 'nd';
			case 3:
				return 'rd';
			default:
				return 'th';
		}
	}

	// Format the date
	const formattedDate: string = `${day}${getOrdinalSuffix(day)} ${
		monthNames[month]
	} ${year}`;
	return formattedDate;
};

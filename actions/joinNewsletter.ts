'use server';

const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
	apiKey: process.env.MAILCHIMP_API_KEY,
	server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function joinNewsletter(formData: FormData) {
	const email = formData.get('email');

	const response = await mailchimp.lists.addListMember(
		process.env.MAILCHIMP_AUDIENCE_ID,
		{
			email_address: email,
			status: 'subscribed',
		}
	);

	return response;
}

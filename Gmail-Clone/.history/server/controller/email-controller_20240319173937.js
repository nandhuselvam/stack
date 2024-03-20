import Email from "../model/email.js"


export const saveSentEmails = (request, response) => {
	try {
		const email = new Email(request.body);
		email.save();

		response

	} catch (error) {
		response.status(500).json(error.message);
	}
}
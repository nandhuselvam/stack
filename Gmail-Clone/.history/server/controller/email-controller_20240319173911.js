import Email from "../model/email.js"


export const saveSentEmails = (request, response) => {
	try {
		const email = new Email(request.body);

	} catch (error) {
		response.status(500).json(error.message);
	}
}
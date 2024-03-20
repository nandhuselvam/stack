import Email from "../model/email.js"


export const saveSentEmails = (request, response) => {
	try {
		const emailnew Email(request.body);

	} catch (error) {
		response.status(500).json(error.message);
	}
}
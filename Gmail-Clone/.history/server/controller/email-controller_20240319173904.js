import Email from "../model/email.js"


export const saveSentEmails = (request, response) => {
	try {
		connew Email(request.body);

	} catch (error) {
		response.status(500).json(error.message);
	}
}
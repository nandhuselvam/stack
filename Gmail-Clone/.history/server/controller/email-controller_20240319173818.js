import Email from "../model/email"


export const saveSentEmails = (request, response) => {
	try {

	} catch (error) {
		response.status(500).json(error.message);
	}
}
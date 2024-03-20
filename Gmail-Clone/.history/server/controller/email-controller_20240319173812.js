import Email from "../model"


export const saveSentEmails = (request, response) => {
	try {

	} catch (error) {
		response.status(500).json(error.message);
	}
}
const SibApiV3Sdk = require('sib-api-v3-sdk');
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;
let apiInstance = new SibApiV3Sdk.ContactsApi();

export default async (req, res) => {
    // 1. Destructure the email address from the request body.
    const { email } = req.body;
    if (!email) {
        // 2. Throw an error if an email wasn't provided.
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        // 3. Fetch the environment variables.
        const LIST_IDS = [4];
        let contact = new SibApiV3Sdk.CreateContact();
        contact.email = email;
        contact.listIds = LIST_IDS;

        // 6. Send a POST request to Mailchimp.
        return apiInstance.createContact(contact).then(response => {
            // 7. Swallow any errors from Mailchimp and return a better error message.
            if (response.status >= 400) {
                return res.status(400).json({
                    error: `There was an error subscribing to the newsletter. Shoot me an email at [me@leerob.io] and I'll add you to the list.`
                });
            }

            // 8. If we made it this far, it was a success! 🎉
            return res.status(201).json({ error: '' });
        })
    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
};
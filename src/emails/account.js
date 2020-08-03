const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'krebedev@gmail.com',
		subject: 'Thanks for using Zenpay',
		text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
	})
}

const sendExitEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'krebedev@gmail.com',
		subject: 'Sorry to see you go!',
		text: `Goodbye, {name}. I hope to see you soon`,
	})
}

module.exports = {
	sendWelcomeEmail,
	sendExitEmail,
}

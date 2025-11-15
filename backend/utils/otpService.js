const { v4: uuidv4 } = require('uuid');
const twilio = require('twilio');

const debug = process.env.OTP_DEBUG === "true";

let client = null;
if (!debug && process.env.TWILIO_SID) {
  client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
}

const generateCode = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

exports.generateAndSendOtp = async (phone) => {
  const code = generateCode();
  const expiresAt = new Date(Date.now() + 1000 * 60 * 5);

  if (debug) {
    console.log("DEBUG OTP:", code);
    return { code, expiresAt };
  }

  await client.messages.create({
    body: `Your OTP is ${code}`,
    from: process.env.TWILIO_FROM,
    to: phone
  });

  return { code, expiresAt };
};

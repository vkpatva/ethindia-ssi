import {
  startAuthentication,
  startRegistration,
} from "@simplewebauthn/browser";
import {
  generateAuthenticationOptions,
  generateRegistrationOptions,
} from "@simplewebauthn/server";

export const registerAccount = async (
  accountName: string,
  challenge: string
) => {
  try {
    if (!accountName) {
      throw new Error("enter user name");
    }
    const userId = crypto.randomUUID();

    const generatedRegistrationOptions = await generateRegistrationOptions({
      rpName: "SSI",
      rpID: window.location.hostname,
      userID: userId,
      userName: accountName,
      attestationType: "direct",
      challenge: challenge,
      supportedAlgorithmIDs: [-7],
    });

    const startRegistrationResponse = await startRegistration(
      generatedRegistrationOptions
    );
    return { accountName, startRegistrationResponse };
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
};

export async function verifyChallenge(challenge: string) {
  const authenticationOptions = await generateAuthenticationOptions({
    rpID: window.location.hostname,
    challenge: challenge,
    userVerification: "required",
  });

  const authenticationResponse = await startAuthentication(
    authenticationOptions
  );

  return {
    signature: authenticationResponse.response.userHandle,
    rawId: authenticationResponse.rawId,
  };
}

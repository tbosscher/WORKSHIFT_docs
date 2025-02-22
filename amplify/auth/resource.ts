import { defineAuth } from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  multifactor: {
    mode: "REQUIRED", // Use "REQUIRED" if all users must enable MFA
    totp: true, // Enable TOTP MFA
  },
});

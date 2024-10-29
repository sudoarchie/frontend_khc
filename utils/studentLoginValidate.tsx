// utils/studentLoginValidate.ts
import axios from "axios";

export async function validateToken() {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("studenttoken="))
    ?.split("=")[1];

  // If no cookie is found, return false immediately
  if (!cookie) {
    console.error("No student token found in cookies.");
    return false;
  }
  try {
    console.log(1);
    const response = await axios.get<{ validate: boolean }>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/student/validate`,
      {
        headers: {
          Cookie: `studenttoken=${cookie}`, // If needed, add cookie to the request
        },
      }
    );
    console.log(2);
    console.log(response);
    return response.data.validate; // Return validation result
  } catch (error) {
    // console.error("Error validating token:", error);
    console.log(3);
    return false; // Return false on error
  }
}

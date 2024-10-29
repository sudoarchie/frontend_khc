import axios, { AxiosError } from "axios";
import { getCookie } from "cookies-next";

interface ValidationResponse {
  validate: boolean;
}

export async function validateToken(): Promise<boolean> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    console.error("Base URL environment variable is not defined");
    return false;
  }

  const studentToken = getCookie("studenttoken");
  if (!studentToken) {
    console.warn("No student token found in cookies");
    return false;
  }

  try {
    const response = await axios.get<ValidationResponse>(
      `${baseUrl}/student/validate`,
      {
        headers: {
          Authorization: `Bearer ${studentToken}`, // Using standard Bearer token auth
        },
        withCredentials: true, // Enables sending cookies with cross-origin requests
        timeout: 5000, // 5 second timeout
      }
    );

    return response.data.validate;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        console.error(
          "Validation request failed:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error("No response received:", error.message);
      } else {
        console.error("Error setting up request:", error.message);
      }
    } else {
      console.error("Unexpected error during validation:", error);
    }
    return false;
  }
}

/**
 * Sends data to the configured Google Apps Script API.
 * @param {Object} data - The data to send (e.g., { email, name, message }).
 * @returns {Promise<boolean>} - Returns true if successful.
 */
export async function sendToGoogleSheet(data) {
  try {
    const SCRIPT_URL = process.env.NEXT_PUBLIC_NEWSLETTER_API;

    if (!SCRIPT_URL) {
      console.warn("Newsletter API URL is not configured. Data will not be saved.");
      return false;
    }

    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return true;
  } catch (error) {
    console.error("Error sending data to Google Sheet:", error);
    return false;
  }
}

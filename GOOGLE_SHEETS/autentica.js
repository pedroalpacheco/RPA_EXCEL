const { google } = require('googleapis');

async function getAuthSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "auth.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({
    version: "v4",
    auth: client,
  });

  const spreadsheetId = '1-VhI3VHjHMqPyuSZPtsAlkeQm_SkIUFrFAiyImPIifU';

  return {
    auth,
    client,
    googleSheets,
    spreadsheetId
  };
};

module.exports = getAuthSheets;
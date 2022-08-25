const getAuthSheets = require('./autentica');

async function main() {
  const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

  const { values } = {
    "values": [
      ["059675675", "Pedro Pacheco", "46", "10/05/1985", "12500"]
    ]
  }
  const rows = await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Página1",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: values,
    }
  });
  rows.data;
};
main();
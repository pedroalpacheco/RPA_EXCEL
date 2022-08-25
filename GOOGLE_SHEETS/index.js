const getAuthSheets = require('./autentica');

async function main() {
  const { googleSheets, auth, spreadsheetId } = await getAuthSheets();
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Página1",
    valueRenderOption: "UNFORMATTED_VALUE",
    dateTimeRenderOption: "FORMATTED_STRING",
  });
  console.log(getRows.data.values);
};
main();
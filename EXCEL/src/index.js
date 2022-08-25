const XLSX = require('xlsx');
const addtb = require('./addtb');

const allArqExcel = XLSX.readFile('../Dados.xlsx');
const sheetName = allArqExcel.SheetNames;
const dadosBrutos = XLSX.utils.sheet_to_csv(allArqExcel.Sheets[sheetName[0]]);
const dados = dadosBrutos.split('\n');
const dadosTamanho = dados.length;
const dadosclean = dados.slice(1, dadosTamanho);

dadosclean.map((res) => {
  let dataBuild = res.split(',');
  let cpf = dataBuild[0];
  let nome = dataBuild[1];
  if (!cpf & !'') {
  } else {
    addtb(cpf, nome);
  }
})

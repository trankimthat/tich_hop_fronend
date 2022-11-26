let dataArr = [];
const getDataEmployee = async () => {
  const res = await fetch('http://localhost:3001/payrollemployees');
  const data = await res.json();
  dataArr = data?.data;
};

const main = async () => {
  await getDataEmployee();
  document.getElementById('newUser').innerHTML = `${dataArr.length}`;
};

main();

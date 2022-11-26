let dataArr = [];
const getDataEmployee = async () => {
  const res = await fetch('http://localhost:3001/total-earning');
  const data = await res.json();
  dataArr = data?.data;
};

const renderPersonal =(data)=>{
const html =  data?.map((item)=>{
    return (
 ` <tr class="odd gradeX">
                      <td>${item?.Employee_ID || ""}</td>
                      <td>${item?.First_Name || ""}</td>
                      <td>${item?.Last_Name || ""}</td>
                      <td>${item?.Gender ? "nam" : "nữ" || ""}</td>
                      <td>${item?.Vacation_Days || ""}</td>
                      <td>${item?.idPay_Rates || ""}</td>
                      <td>${item?.Pay_Rate_Name || ""}</td>
                      <td>${item?.Value || ""}</td>
                      <td>${item?.Tax_Percentage || ""}</td>
                      <td>${item?.Pay_Type || ""}</td>
                      <td>${item?.Pay_Amount || ""}</td>-
                      <td>${item?.PT_Level_C || ""}</td>
                      <td>${item?.Paid_To_Date || ""}</td>
                      <td>${item?.Paid_Last_Year || ""}</td>
                      <td>${item?.Department || ""}</td>
                      <td>${item?.Ethnicity || ""}</td>
                      <td>${item?.Deductable || ""}</td>
                      <td>${item?.Employment_Status || ""}</td>
                    </tr>`
)})
return html?.join("");
}
const main = async () => {
  await getDataEmployee();
const html = renderPersonal(dataArr)
document.getElementById("listPersonal").innerHTML = html
};

main();


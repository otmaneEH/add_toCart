function valid() {
    var formData = readFormData()

}
function readFormData() {
    var formData = {};
    formData["name"] =document.getElementById("email").value;
    formData["eurCode"] =document.getElementById("eurcode").value;
    formData["salary"] =document.getElementById("salary").value;
    formData["salary"] =document.getElementById("city").value;
    return formData;
}
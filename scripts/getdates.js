const d = new Date();
const year = d.getFullYear();
document.getElementById("currentYear").innerHTML = ` &copy; ${year}`;

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
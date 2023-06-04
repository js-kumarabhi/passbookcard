const canvas = document.getElementById("result");
const preview = document.getElementById("preview");
preview.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the form from submitting
  prev();
});

canvas.width = 350; // Set the desired width
canvas.height = 270; // Set the desired height

const ctx = canvas.getContext("2d");
ctx.font = "20px Helvetica";

const image = document.getElementById("imgDisplayed");
const logo = document.getElementById("logo");

function prev() {
  let incifNum = document.getElementById("incif_num").value;
  let inacNum = document.getElementById("inac_num").value;
  let inifsc = document.getElementById("inifsc").value;
  let infname = document.getElementById("infname").value;
  let inmname = document.getElementById("inmname").value;
  let inlname = document.getElementById("inlname").value;

  let invname = document.getElementById("invname").value;
  let inaddress = document.getElementById("inaddress").value;
  let inpin = document.getElementById("inpin").value;
  let inkoname = document.getElementById("inkoname").value;
  let inkoloaction = document.getElementById("inkoloaction").value;

  // Retrieve values of other input fields

  const cifNum = document.getElementById("cif_num");
  const acNum = document.getElementById("ac_num");
  const ifsc = document.getElementById("ifsc");
  const fname = document.getElementById("fname");
  const mname = document.getElementById("mname");
  const lname = document.getElementById("lname");

  const vname = document.getElementById("vname");
  const address = document.getElementById("address");
  const pin = document.getElementById("pin");
  const koname = document.getElementById("koname");
  const koloaction = document.getElementById("koloaction");

  // Set innerHTML of other list items

  cifNum.innerHTML = incifNum;
  acNum.innerHTML = inacNum;
  ifsc.innerHTML = inifsc;
  fname.innerHTML = infname;
  mname.innerHTML = inmname;
  lname.innerHTML = inlname;

  vname.innerHTML = invname;
  address.innerHTML = inaddress;
  pin.innerHTML = inpin;
  koname.innerHTML = inkoname;
  koloaction.innerHTML = inkoloaction;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#159";
  ctx.font = "600 16px Arial";
  ctx.fillText("SBI - KIOSK BANKING", 90, 25);
  ctx.font = "600 15px Arial";
  ctx.fillText("Identity Card", 130, 45);
  ctx.drawImage(logo, 50, 5, 30, 30);
  // ctx.drawImage(logo, 270, 5, 30, 30);

  ctx.font = "600 14px Arial";
  ctx.fillText("Cif Number :", 10, 70);
  ctx.fillText("Account Number :", 10, 90);
  ctx.font = "14px curier";
  ctx.fillText(cifNum.innerHTML, 180, 70);
  ctx.fillText(acNum.innerHTML, 180, 90);

  ctx.font = "600 12px Arial";
  ctx.fillText("IFSC code :", 10, 110);
  ctx.fillText("First Name :", 10, 125);
  ctx.fillText("Middle Name :", 10, 140);
  ctx.fillText("Last Name :", 10, 155);
  ctx.fillText("Address :", 10, 170);
  ctx.fillText("Village Name :", 10, 215);
  ctx.fillText("Pin :", 10, 230);
  ctx.fillText("KO Name :", 10, 245);
  ctx.fillText("KO Location :", 10, 260);

  ctx.font = " 11px Arial";
  ctx.fillStyle = "#159";
  ctx.fillText(ifsc.innerHTML, 100, 110);
  ctx.fillText(fname.innerHTML, 100, 125);
  ctx.fillText(mname.innerHTML, 100, 140);
  ctx.fillText(lname.innerHTML, 100, 155);
  wrapText(ctx, address.innerHTML, 100, 170, 150, 15);
  ctx.fillText(vname.innerHTML, 100, 215);
  ctx.fillText(pin.innerHTML, 100, 230);
  ctx.fillText(koname.innerHTML, 100, 245);
  wrapText(ctx, koloaction.innerHTML, 100, 260, 150, 15);

  // Draw other values

  ctx.drawImage(image, 250, 110, 90, 100);
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  let posY = y;

  words.forEach((word) => {
    const testLine = line + word + " ";
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > maxWidth) {
      context.fillText(line, x, posY);
      line = word + " ";
      posY += lineHeight;
    } else {
      line = testLine;
    }
  });

  context.fillText(line, x, posY);
}

function loadImage(event) {
  const image = document.getElementById("imgDisplayed");
  image.src = URL.createObjectURL(event.target.files[0]);
}

const download = document.getElementById("down");
download.addEventListener("click", function() {
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(canvas.msToBlob(), "Card.png");
  } else {
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "Card.png";
    a.click();
    document.body.removeChild(a);
  }
});

const SALES_TAX = 0.115;

function calculatePrice() {
  try {
    let price = 0;
    let processorPrice = document.getElementById("processor").value;

    if (isNaN(processorPrice)) throw new Error("Invalid processor selection.");
    price += Number(processorPrice);

    switch (document.getElementById("processor").value) {
      case "317.24":
        document.getElementById("productImage").src =
          "/assets/intelCorei5-13600k.jpg";

        break;
      case "364.99":
        document.getElementById("productImage").src =
          "/assets/intelCorei7-13700k.jpg";

        break;
      case "551.99":
        document.getElementById("productImage").src =
          "/assets/intelCorei9-13900k.jpg";

        break;
      case "384.99":
        document.getElementById("productImage").src =
          "/assets/Ryzen-7800X3D.jpg";

        break;
      case "478.54":
        document.getElementById("productImage").src =
          "/assets/Ryzen-7950X3D.jpg";

        break;
      case "659.00":
        document.getElementById("productImage").src =
          "/assets/Ryzen-7950X3D.jpg";

        break;
      default:
        document.getElementById("productImage").src =
          "/assets/intelCorei5-13600k.jpg";
    }

    let memoryPrice = document.getElementById("memory").value;
    price += Number(memoryPrice);

    switch (document.getElementById("memory").value) {
      case "214.99":
        document.getElementById("productImage2").src =
          "/assets/ddr5_32gb_6400.jpg";
        break;
      case "279.99":
        document.getElementById("productImage2").src =
          "/assets/ddr5_48gb_8000.jpg";

        break;
      case "199.99":
        document.getElementById("productImage2").src =
          "/assets/ddr5_32gb_7800.jpg";
        break;
      default:
        document.getElementById("productImage2").src =
          "/assets/ddr5_32gb_6400.jpg";
    }

    let moboPrice = document.getElementById("mobo").value;
    price += Number(moboPrice);

    switch (document.getElementById("mobo").value) {
      case "309.99":
        document.getElementById("productImage3").src =
          "/assets/Intel_DDR5_13th.jpg";
        break;
      case "199.00":
        document.getElementById("productImage3").src = "/assets/AMD_AM5.jpg";
        break;
      case "637.66":
        document.getElementById("productImage3").src = "/assets/AMD_AM5_2.jpg";
        break;
      default:
        document.getElementById("productImage3").src =
          "/assets/Intel_DDR5_13th.jpg";
    }

    let cpuCoolerPrice = document.getElementById("cpuCooler").value;
    price += Number(cpuCoolerPrice);

    switch (document.getElementById("cpuCooler").value) {
      case "89.90":
        document.getElementById("productImage4").src =
          "/assets/CPU_AirCool.jpg";
        break;
      case "269.99":
        document.getElementById("productImage4").src = "/assets/corsairAIO.jpg";
        break;
      default:
        document.getElementById("productImage4").src =
          "/assets/CPU_AirCool.jpg";
    }

    let psuPrice = document.getElementById("psu").value;
    price += Number(psuPrice);

    switch (document.getElementById("psu").value) {
      case "149.99":
        document.getElementById("productImage5").src =
          "/assets/msi1000wGold.jpg";
        break;
      case "159.99":
        document.getElementById("productImage5").src =
          "/assets/evga1000wGold.jpg";
        break;
      default:
        document.getElementById("productImage5").src =
          "/assets/msi1000wGold.jpg";
    }

    let gpuPrice = document.getElementById("gpu").value;
    price += Number(gpuPrice);

    switch (document.getElementById("gpu").value) {
      case "1310.00":
        document.getElementById("productImage6").src =
          "/assets/rtx3080ti_evga.jpg";
        break;
      case "625.00":
        document.getElementById("productImage6").src =
          "/assets/rtx3070ti_msi.jpg";
        break;
      case "1774.99":
        document.getElementById("productImage6").src =
          "/assets/rtx3090ti_evga.jpg";
        break;
      default:
        document.getElementById("productImage6").src =
          "/assets/rtx3080ti_evga.jpg";
    }

    let casePrice = document.getElementById("case").value;
    price += Number(casePrice);

    switch (document.getElementById("case").value) {
      case "144.99":
        document.getElementById("productImage7").src = "/assets/O11_D_EVO.jpg";
        break;
      case "184.99":
        document.getElementById("productImage7").src = "/assets/Y60_black.jpg";
        break;
      case "127.99":
        document.getElementById("productImage7").src =
          "/assets/corsairCase.jpg";
        break;
      default:
        document.getElementById("productImage7").src = "/assets/O11_D_EVO.jpg";
    }

    let m2Price = document.getElementById("m2").value;
    price += Number(m2Price);

    switch (document.getElementById("m2").value) {
      case "129.99":
        document.getElementById("productImage8").src =
          "/assets/m2SamProGen4.jpg";
        break;
      case "74.25":
        document.getElementById("productImage8").src =
          "/assets/m2SamProGen4_1Tb.jpg";
        break;
      default:
        document.getElementById("productImage8").src =
          "/assets/m2SamProGen4.jpg";
    }
    document.getElementById("price").innerText = `$${price.toFixed(2)}`;
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

function checkout() {
  storeDataForInvoice();

  window.location.href = "invoice.html";
}

function storeDataForInvoice() {
  let data = {
    basePrice: Number(
      document.getElementById("price").innerText.replace("$", "")
    ),
    processor: {
      name: document.getElementById("processor").options[
        document.getElementById("processor").selectedIndex
      ].text,
      imgSrc: document.getElementById("productImage").src,
    },
    memory: {
      name: document.getElementById("memory").options[
        document.getElementById("memory").selectedIndex
      ].text,
      imgSrc: document.getElementById("productImage2").src,
    },
    mobo: {
      name: document.getElementById("mobo").options[
        document.getElementById("mobo").selectedIndex
      ].text,
      imgSrc: document.getElementById("productImage3").src,
    },
    cpuCooler: {
      name: document.getElementById("cpuCooler").options[
        document.getElementById("cpuCooler").selectedIndex
      ].text,
      imgSrc: document.getElementById("productImage4").src,
    },
    psu: {
      name: document.getElementById("psu").options[
        document.getElementById("psu").selectedIndex
      ].text,
      imgSrc: document.getElementById("productImage5").src,
    },
    gpu: {
      name: document.getElementById("gpu").options[
        document.getElementById("gpu").selectedIndex
      ].text,
      imgSrc: document.getElementById("productImage6").src,
    },
    case: {
      name: document.getElementById("case").options[
        document.getElementById("case").selectedIndex
      ].text,
      imgSrc: document.getElementById("productImage7").src,
    },
    m2: {
      name: document.getElementById("m2").options[
        document.getElementById("m2").selectedIndex
      ].text,
      imgSrc: document.getElementById("productImage8").src,
    },
  };

  if (data.basePrice === 0) {
    alert("Nothing selected!");
    throw new Error("Nothing selected!");
  }

  sessionStorage.setItem("checkoutData", JSON.stringify(data));
  console.log("Saved data:", JSON.stringify(data)); // add this line
}
function loadInvoiceData() {
  let data = JSON.parse(sessionStorage.getItem("checkoutData"));
  console.log("Loaded data:", data);
  if (!data) {
    alert("No checkout data found!");
    return;
  }

  // Processor
  if (data.processor.name !== "Select an option") {
    document.getElementById("productImage").src = data.processor.imgSrc;
    document.getElementById("processorNamePlaceholder").innerText =
      data.processor.name;
  } else {
    document.getElementById("CPU").style.display = "none";
  }

  // Memory
  if (data.memory.name !== "Select an option") {
    document.getElementById("productImage2").src = data.memory.imgSrc;
    document.getElementById("memoryNamePlaceholder").innerText =
      data.memory.name;
  } else {
    document.getElementById("RAM").style.display = "none";
  }

  // Motherboard
  if (data.mobo.name !== "Select an option") {
    document.getElementById("productImage3").src = data.mobo.imgSrc;
    document.getElementById("moboNamePlaceholder").innerText = data.mobo.name;
  } else {
    document.getElementById("MOBO").style.display = "none";
  }

  // CPU Cooler
  if (data.cpuCooler.name !== "Select an option") {
    document.getElementById("productImage4").src = data.cpuCooler.imgSrc;
    document.getElementById("cpuCoolerNamePlaceholder").innerText =
      data.cpuCooler.name;
  } else {
    document.getElementById("CPUCOOLER").style.display = "none";
  }

  // PSU
  if (data.psu.name !== "Select an option") {
    document.getElementById("productImage5").src = data.psu.imgSrc;
    document.getElementById("psuNamePlaceholder").innerText = data.psu.name;
  } else {
    document.getElementById("PSU").style.display = "none";
  }

  // GPU
  if (data.gpu.name !== "Select an option") {
    document.getElementById("productImage6").src = data.gpu.imgSrc;
    document.getElementById("gpuNamePlaceholder").innerText = data.gpu.name;
  } else {
    document.getElementById("GPU").style.display = "none";
  }

  // Case
  if (data.case.name !== "Select an option") {
    document.getElementById("productImage7").src = data.case.imgSrc;
    document.getElementById("caseNamePlaceholder").innerText = data.case.name;
  } else {
    document.getElementById("CASE").style.display = "none";
  }

  // M.2 Storage
  if (data.m2.name !== "Select an option") {
    document.getElementById("productImage8").src = data.m2.imgSrc;
    document.getElementById("m2NamePlaceholder").innerText = data.m2.name;
  } else {
    document.getElementById("M2STORAGE").style.display = "none";
  }

  let basePrice = data.basePrice;
  let tax = basePrice * SALES_TAX;
  let total = basePrice + tax;

  // Display data on the invoice page
  document.getElementById(
    "basePricePlaceholder"
  ).innerText = `$${basePrice.toFixed(2)}`;
  document.getElementById("taxPlaceholder").innerText = `$${tax.toFixed(2)}`;
  document.getElementById("totalPlaceholder").innerText = `$${total.toFixed(
    2
  )}`;
}

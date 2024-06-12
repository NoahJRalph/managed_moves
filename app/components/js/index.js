// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(async function () {
  //Populates the rows with adequately time-labeled bars while keeping the code as clean as possible (not copy-pasting 24 different rowContents here or in the html).
  // ===CLIENT INFORMATION QUESTIONS===
  // Currently Uses: clientFullName, moveDate, moveStartTime, moveDate, initialAddress, contactFullName, contactPhoneNumber, contactEmail, destinationAddress, secondaryAddress, clientNotes, initialType, initialCodes, destinationType, destinationCodes
  let clientInfoArray = [
    {
      id: `clientFullName`,
      question: "Client's Full Name:",
      required: true
    },
    {
      id: `clientPhoneNumber`,
      question: "Client's Phone Number:",
      required: false
    },
    {
      id: `clientEmail`,
      question: "Client's Email:",
      required: false
    },
    {
      id: `clientSpecialNeeds`,
      question: "Client Special Needs:",
      required: false
    },
    {
      id: `clientNotes`,
      question: "Client Notes:",
      required: false
    },
  ];

  // ===CONTACT INFORMATION QUESTIONS===
  let contactInfoArray = [
    {
      id: `contactFullName`,
      question: "Contact's Full Name:",
      required: false
    },
    {
      id: `contactPhoneNumber`,
      question: "Contact's Phone Number:",
      required: false
    },
    {
      id: `contactEmail`,
      question: "Contact's Email:",
      required: false
    },
    {
      id: `contactNotes`,
      question: "Contact Notes:",
      required: false
    },
  ];

  // ===BUILDING QUESTIONS===
  let buildingInfoArray = [
    {
      id: `initialAddress`,
      question: "Full Initial Address:",
      required: true
    },
    {
      id: `initialType`,
      question: "Building Type:",
      required: false
    },
    {
      id: `initialEntry`,
      question: "Preferred Entry:",
      required: false
    },
    {
      id: `initialCodes`,
      question: "Entry Codes:",
      required: false
    },
    {
      id: `secondaryAddress`,
      question: "Full Secondary Address:",
      required: false
    },
    {
      id: `secondaryType`,
      question: "2nd Building Type:",
      required: false
    },
    {
      id: `secondaryEntry`,
      question: "2nd Preferred Entry:",
      required: false
    },
    {
      id: `secondaryCodes`,
      question: "2nd Entry Codes:",
      required: false
    },
    {
      id: `destinationAddress`,
      question: "Full Destination Address:",
      required: false
    },
    {
      id: `destinationType`,
      question: "Dest. Building Type:",
      required: false
    },
    {
      id: `destinationCodes`,
      question: "Dest. Entry Code:",
      required: false
    },
    {
      id: `destinationEntry`,
      question: "Dest. Preferred Entry:",
      required: false
    },
  ];

  // ===JOB DATE QUESTIONS===
  let dateInfoArray = [
    {
      id: `estimationDate`,
      question: "Estimation Date:",
      required: false
    },
    {
      id: `estimationStartTime`,
      question: "Estimation Start-time:",
      required: false
    },
    {
      id: `packDate`,
      question: "Pack Date:",
      required: false
    },
    {
      id: `packStartTime`,
      question: "Pack Start-time:",
      required: false
    },
    {
      id: `moveDate`,
      question: "Move Date:",
      required: true
    },
    {
      id: `moveStartTime`,
      question: "Move Start-time:",
      required: true
    },
    {
      id: `unpackDate`,
      question: "Unpack Date:",
      required: false
    },
    {
      id: `unpackStartTime`,
      question: "Unpack Start-time:",
      required: false
    },
  ]

  // Total array of all questions.
  let InfoArray = [clientInfoArray, contactInfoArray, buildingInfoArray, dateInfoArray];
  let infoArrayName = ["clientInfoArray", "contactInfoArray", "buildingInfoArray", "dateInfoArray"]; // Dumbest workaround ever because Object.keys didn't take any instance of InfoArray[i]

  for(let i=0; i<InfoArray.length; i++) { // [clientInfoArray, contactInfoArray, buildingInfoArray, dateInfoArray]
    var idName = `#` + infoArrayName[i];
    for(let j=0; j<InfoArray[i].length; j++) { // Contents of each array.
      if (InfoArray[i][j].required) {
        // If the question is required.
        let rowContent = (
          `<div class="p-2 m-1 rounded-md bg-neutral-300 transition hover:bg-neutral-400 hover:shadow-xl">
            <p class="flex flex-row font-mono text-black text-pretty underline">
              <i data-feather="edit" class="m-1"></i>
              *${InfoArray[i][j].question}
            </p>
            <input name="${InfoArray[i][j].id}" class="p-1 m-1 rounded-md bg-white text-black font-mono font-normal text-black text-pretty shadow-xl border-2 border-black" type="text" placeholder="Required"></input>
          </div>`
        );
        $(idName).append(rowContent);
      }
      else {
        // If the question isn't required.
        let rowContent = (
          `<div class="p-2 m-1 rounded-md bg-neutral-300 transition hover:bg-neutral-400 hover:shadow-xl">
            <p class="flex flex-row font-mono text-black text-pretty underline">
              <i data-feather="edit" class="m-1"></i>
              ${InfoArray[i][j].question}
            </p>
            <input name="${InfoArray[i][j].id}" class="p-1 m-1 rounded-md bg-white text-black font-mono font-normal text-black text-pretty shadow-xl border-2 border-black" type="text" placeholder=""></input>
          </div>`
        );
        $(idName).append(rowContent);
      };
    };
    feather.replace();
  };
  
  // ===SAVEFILES FUNCTION===
  $(`#saveFiles`).on(`click`, async function () {
    // #1: CSV File
    // CSV File Contents
      // Currently Uses: clientFullName, moveDate, moveStartTime, moveDate, initialAddress, contactFullName, contactPhoneNumber, contactEmail, destinationAddress, secondaryAddress, clientNotes, initialType, initialCodes, destinationType, destinationCodes
    let csvData = [
      `Subject,Start Date,Start Time,End Date,End Time,All Day Event,Calendar Name,Location,Who,Description`+`
      "`+$('#masterContainer').find('input[name="clientFullName"]').val()+`","`+$('#masterContainer').find('input[name="moveDate"]').val()+`","`+$('#masterContainer').find('input[name="moveStartTime"]').val()+`","`+$('#masterContainer').find('input[name="moveDate"]').val()+`","6pm","False",".Team > name A|.Team > name B","`+$('#masterContainer').find('input[name="initialAddress"]').val()+`","He, Him, Whom","
      <h2>Waiting on:</h2>
      <ul>
      <li>Photos/Slack Channel </li>
      <li>Estimate</li>
      </ul>
      <p>______________________</p>
      <p><strong>MATERIALS/EQUIPMENT</strong>: Anything required for a pack/move beyond standard inventory - Completed by Estimator or Operations. Can also be left blank</p>
      <p><strong>CREW:</strong> Assigned crew members - PDNM can go here or when specific crew members are needed for specific types of move</p>
      <p><strong>DISPATCH NOTES</strong>: Arrival/departure times . If crew members are meeting at a job. If client has specific needs around arrival time.</p>
      <p><strong>JOB SCOPE:</strong> </p>
      <ul>
      <li> A big picture overview of the job</li>
      </ul>
      <p>________________________________________________________________________</p>
      <h2><strong>CLIENT INFORMATION</strong></h2>
      <p><strong>PRIMARY CONTACT: </strong>`+$('#masterContainer').find('input[name="contactFullName"]').val()+`</p>
      <ul>
      <li><strong>PHONE: </strong>`+$('#masterContainer').find('input[name="contactPhoneNumber"]').val()+`</li>
      <li><strong>EMAIL: </strong>`+$('#masterContainer').find('input[name="contactEmail"]').val()+`</li>
      </ul>
      <p><strong>ADDITIONAL CONTACTS: </strong> Anyone else who need to be contacted about the move and their relation/role</p>
      <p><strong>PROPERTY CONTACTS: </strong> The representative at the property that the office has confirmed with</p>
      <p><strong></strong></p>
      <p><strong>ORIGIN: </strong> `+$('#masterContainer').find('input[name="initialAddress"]').val()+`</p>
      <p><strong>DESTINATION: </strong> `+$('#masterContainer').find('input[name="destinationAddress"]').val()+`</p>
      <p><strong>DESTINATION 2: </strong> `+$('#masterContainer').find('input[name="secondaryAddress"]').val()+`</p>
      <p><strong></strong></p>
      <p><strong>CLIENT NOTES: </strong> `+$('#masterContainer').find('input[name="clientNotes"]').val()+`</p>
      <p></p>
      <p><strong><em>Payment arrangements:</em></strong> Discount information, if any. COD (default). Contact information if different person paying. Invoicing requires Manager approval and the following information: </p>
      <p>Name</p>
      <p>Mailing Address</p>
      <p>Phone </p>
      <p>Email</p>
      <p>______________________</p>
      <h2><strong>MOVE SCHEDULE</strong></h2>
      <ul>
      <li><strong>PRIOR</strong>: Date</li>
      <li><strong>EST</strong>: Date, Name</li>
      <li><strong>DSZ</strong>: Date, Name</li>
      <li><strong>PK</strong>: Date, Name</li>
      <li><strong>MOVE</strong>: Date, Name</li>
      <li><strong>UP</strong>: Date, Name</li>
      <li><strong>CO EST</strong>: Date, Name</li>
      <li><strong>CO</strong>: Date, Name</li>
      </ul>
      <p>________________________________________________________________________</p>
      <h2><strong>ORIGIN DETAILS</strong></h2>
      <p><strong>SIZE: </strong>`+$('#masterContainer').find('input[name="initialType"]').val()+`</p>
      <p><strong>ACCESS: </strong>`+$('#masterContainer').find('input[name="initialCodes"]').val()+`</p>
      <p><strong>INVENTORY</strong>: See Slack channel or list of items that will not be boxed plus and approximate number of boxes</p>
      <p><strong>ITEMS OF NOTE</strong>: Items that require special preparation/handling, or are sentimental to the client</p>
      <p><strong>PACKING</strong>: Items or areas that the packing or moving crew is packing.</p>
      <p><strong>LABELING</strong>: </p>
      <p><strong>CLIENT TASKS: </strong>Agreed upon responsibilities of the client or work that the client has already completed</p>
      <p>______________________</p>
      <h2><strong>DESTINATION DETAILS</strong></h2>
      <p><strong>SIZE: </strong>`+$('#masterContainer').find('input[name="destinationType"]').val()+`</p>
      <p><strong>ACCESS: </strong>`+$('#masterContainer').find('input[name="destinationCodes"]').val()+`</p>
      <p><strong>UNPACKING/SET UP</strong>: Specific client requests for how the leave the home</p>"`
    ];
    // Assemble the CSV File for download; pass the client's full name as the prefix to the file name.
    let fileCSV = new File([csvData], $('#masterContainer').find('input[name="clientFullName"]').val() + '_TeamUp.csv', {type: 'text/csv'});
    // Pass the CSV file to the download function.
    downloadFile(fileCSV);

    // #2: Excel File
    let xlsData = 
    (`<table border="1">
      <tr>
        <td>EXTREMELY RUSHED CLIENT INFO TABLE:</td><td>Developer's Note: It needs more work, I know; This is here to merely prove that the web app CAN produce an excel spreadsheet of any kind, and have entered data flow into the sheet.</td><td>You'll notice the sheet does in fact have the entered client's full name and the assigned move date attached.</td>
      </tr>
      <tr>
        <td>Client Name:</td> <td>`+$('#masterContainer').find('input[name="clientFullName"]').val()+`</td> <td>Client Move Date:</td> <td>`+$('#masterContainer').find('input[name="moveDate"]').val()+`</td>
      </tr>
    </table>`);
    // Assemble the XLS File for download; pass the client's full name as the prefix to the file name.
    let fileXLS = new File([xlsData], $('#masterContainer').find('input[name="clientFullName"]').val() + '_Excel.xls', {type:'data:application/vnd.ms-excel;base64'});
    // Pass the Excel file to the download function.
    downloadFile(fileXLS);

    /* OLD BROKEN CODE for modifying an existing excel sheet.
    const xlsxBlueprint = ("./app/components/xlsx/MasterCubeSheet.xlsx");

    // Read the Excel Blueprint File (as a BLOB)
    const blob = new Blob([xlsxBlueprint], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8' });
    const buffer = await blob.arrayBuffer();
    const workbook = new ExcelJS.Workbook();
    
    await workbook.xlsx.load(buffer);
    
    const worksheetClient = workbook.getWorksheet('CLIENT');
    const worksheetEstimator = workbook.getWorksheet('ESTIMATOR');

    worksheetClient.getCell('C10').value = $('#masterContainer').find('input[name="clientFullName"]').val();
    await workbook.xlsx.writeBuffer(buffer);
    const fileXLSX = new File([workbook], $('#masterContainer').find('input[name="clientFullName"]').val() + '_Excel.xlsx');
    */
  });

  // ===DOWNLOADFILE FUNCTION===
  async function downloadFile(file) {
    let link = document.createElement('a');
    let url = URL.createObjectURL(file);
  
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
  
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
});
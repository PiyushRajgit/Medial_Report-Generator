export const formatCellContent = (bioRefInterval) => {
  // Assuming the values are separated by a space
  console.log("ghusa")
  const values = bioRefInterval.split('$');
  if (values.length > 1) {
    return values.map((value, index) => (
      <>
        <span key={index}>
          {value}
        </span>
        <br />
      </>
    ));
  }
  else {
    return bioRefInterval
  }
};

export const changeStartingLetter = (name) => {
  name.trimStart();
  if (name.length > 0) {
    return name[0].toUpperCase() + name.slice(1);
  }
  return name;
}

export const changeDollarToSpace = (data) => {
  return data.replaceAll('$', ' ');
}

export const setInitialTestDetail = (f) => {
  let initialData = [];
  // Note : when we want two data to be fit in once cell we need to seperate them as $ 
  if (f.toLowerCase().includes("complete blood count") || f.toLowerCase().includes("cbc")) {
    initialData = [{ testName: 'Haemoglobin(Hb)', result: '', units: 'mg/dl', bioRefInterval: 'Male:13.1-16.7$Female:12.0-15.0' },
    { testName: 'Total WBC Count', result: '', units: 'Cells/cu mm', bioRefInterval: '4,100-11,100' },
    { testName: 'Lymphocytes', result: '', units: '%', bioRefInterval: '16-46' },
    { testName: 'Monocytes', result: '', units: '%', bioRefInterval: '2.3-8.5' },
    { testName: 'Granulyocytes', result: '', units: '%', bioRefInterval: '48.7-81.2' },
    { testName: 'R.B.C. COUNT', result: '', units: 'Million Cells/cu mm ', bioRefInterval: 'Women:3.90-5.20$Men:4.5-5.5' },
    { testName: 'HCT', result: '', units: '% ', bioRefInterval: '36.4-46.0' },
    { testName: 'MCV', result: '', units: 'Fl ', bioRefInterval: '83-97' },
    { testName: 'MCH', result: '', units: 'pg ', bioRefInterval: '27-32' },
    { testName: 'MCHC', result: '', units: 'g/dl ', bioRefInterval: '32-34' },
    { testName: 'RDW - CV', result: '', units: '% ', bioRefInterval: '11.9-14.8' },
    { testName: 'RDW - SD', result: '', units: 'Fl', bioRefInterval: '38-49' },
    { testName: 'Platelets Count', result: '', units: 'lakh/cu mm', bioRefInterval: '1.50-4.10' },
    { testName: 'MPV', result: '', units: 'Fl', bioRefInterval: '7.0-10.5' },
    { testName: 'PCT', result: '', units: '%', bioRefInterval: '0.150-0.500' },
    { testName: 'PDW', result: '', units: '%', bioRefInterval: '11.0-18.0' },
    ]
  }
  else if (f.toLowerCase().includes("kidney function test") || f.toLowerCase().includes("kft")) {
    initialData = [{ testName: 'Serum Creatinine', result: '', units: 'mg/dl', bioRefInterval: 'Men:0.6-1.4$Women:0.6-1.2' },
    { testName: 'Blood Urea', result: '', units: 'mg/dl', bioRefInterval: '13-45' },
    { testName: 'Serum Uric Acid', result: '', units: 'mg/dl', bioRefInterval: 'Men:3.6-7.2$Women:2.5-6.8' },
    { testName: 'Potassium', result: '', units: 'mmol/L', bioRefInterval: '3.5-5.2' },
    { testName: 'Sodium', result: '', units: 'mmol/L', bioRefInterval: '136-145' },
    { testName: 'Chloride', result: '', units: 'mmol/L ', bioRefInterval: '96-108' },
    ]
  }
  else if (f.toLowerCase().includes("liver Function test") || f.toLowerCase().includes("lft")) {
    initialData = [
      { testName: 'Serum Bilirubin Total ', result: '', units: 'mg/dl', bioRefInterval: '0.1-1.2' },
      { testName: 'Serum Bilirubin Direct', result: '', units: 'mg/dl', bioRefInterval: '00-0.3' },
      { testName: 'Bilirubin Indirect', result: '', units: 'mg/dl', bioRefInterval: 'upto 0.7' },
      { testName: 'S.G.P.T (AST)', result: '', units: 'U/L', bioRefInterval: 'upto-<45' },
      { testName: 'S.G.O.T(AST)', result: '', units: 'U/L ', bioRefInterval: 'upto-<45' },
      { testName: 'Serum Alkaline Phosphatase', result: '', units: 'U/L ', bioRefInterval: 'Adults:41-135$Women:30-160'},
      { testName: 'Serum Protein-Total ', result: '', units: 'mg/dl', bioRefInterval: '6.0-8.3' },
      { testName: 'Serum Protein-albumin ', result: '', units: 'mg/dl', bioRefInterval: '3.2-5.0' },
    ]
  }
  else if (f.toLowerCase().includes("anti hcv") || f.toLowerCase().includes("hcv")) {
    initialData = [
      { testName: 'Anti HCV', result: '', bioRefInterval: '' }
    ]
  }
  else if (f.toLowerCase().includes("hiv")) {
    initialData = [
      { testName: 'HIV 1', result: '', bioRefInterval: '' },
      { testName: 'HIV 2', result: '', bioRefInterval: '' }
    ]
  }
  else if (f.toLowerCase().includes("hbsag")) {
    initialData = [
      { testName: 'Hbsag$ Method:CARD Method', result: '', units: '', bioRefInterval: '' },
    ]
  }
  else if (f.toLowerCase().includes("glycosylated haemoglobin") || f.toLowerCase().includes('hba1c')) {
    initialData = [
      { testName: ' Glycosylated Haemoglobin-HbA1c$Method: Latex Immunoturbidometry-NGSP/IFCC Standardized', result: '',units:'', bioRefInterval: '5.0%-6.5%-Normal Non$Diabetic Level$7.0-9.0-Good Control (GOAL)$9.0 to 10.0-Fair Control$>10-Poor Control' },
      { testName: 'Mean Blood Glucose (calculated from HbA1c)', result: '', units: '', bioRefInterval: '' },
        
    ]
  }


  return initialData;
}
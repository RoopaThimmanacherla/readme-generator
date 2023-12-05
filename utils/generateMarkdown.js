const licenseDetails = require("./licenseList.js");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  }
  const result = licenseDetails.filter(
    (licenseDetail) => licenseDetail.name == license
  );
  return result[0].badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return "";
  }
  const result = licenseDetails.filter(
    (licenseDetail) => licenseDetail.name == license
  );
  return result[0].link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return "";
  }
  return `## License
  This application have license[${license}](${renderLicenseLink(
    license
  )}).Click on the link for details.`;
}

const generateTableContents = (data) => {
  if (data.license == "None") {
    return `
    ## Table of Contents
  [Installation](#installation)

  [Usage](#usage)

  [Contribute](#contribute)

  [Tests](#tests)

  [Questions](#questions)`;
  } else {
    return `
    ## Table of Contents
  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contribute](#contribute)

  [Tests](#tests)

  [Questions](#questions)`;
  }
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
 ## Description
 ${data.Description}
 ${generateTableContents(data)}
 ## Installation
${data.Installation}
## usage
${data.usage}
${renderLicenseSection(data.license)}
## Contribute
${data.contribute}
## Tests
${data.test}
## Questions
[Link to my github profile](https://github.com/${data.username})

Email to the following id for any Questions:
${data.email}
`;
}

module.exports = generateMarkdown;

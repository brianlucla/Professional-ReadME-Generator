
function renderLicenseBadge(license) {
  licenseString=license.split(" ");
  if (license !== 'None'){
    licenseMDURL = `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    return licenseMDURL;
  }
  return '';
}


function renderLicenseLink(license) {
  if (license !== "None"){
    return `* [License](#license)`;
  }
  return '';
}


function renderLicenseSection(license) {
  const licenseSection = `## License
  
This project is licensed by the ${license} license.`;
  return licenseSection;
}


function generateMarkdown(data) {
  return `# ${data.projname}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
${renderLicenseLink(data.license)}
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

${renderLicenseSection(data.license)}

## Features

${data.features}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions regarding the project, feel free to contact me at my email ${data.email} or open an issue.

To see more of my projects, you may find me at [${data.githubUser}](https://github.com/${data.githubUser}/)
  `;
}

module.exports = generateMarkdown;

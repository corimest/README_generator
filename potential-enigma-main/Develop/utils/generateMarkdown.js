// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![license](https://img.shields.io/badge/license-${data.license}-red.svg?style=for-the-badge&logo=appveyor)

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [License](#license)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description: 
  ${data.descript}
  ## Installation:
  ${data.install}
  ## License: 
  This project is covered under ${data.license}.
  For more information on licenses, please refer to https://choosealicense.com/licenses/.
  ## Usage: 
  ${data.usage}
  ## Contributing: 
  ${data.contrib}
  ## Testing
  ${data.test}
  ## Questions
  - GitHub: [${data.username}](https://github.com/${data.username})
  - Email: [${data.email}](mailto:user@example.com)
  - Reach Out: ${data.reachOut}

`;
}

module.exports = generateMarkdown;

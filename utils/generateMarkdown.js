// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![license](https://img.shields.io/badge/license-${data.license}-blue)
# Table of Contents
* [Project Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Questions](#questions)

# Project Description
${data.description}

# Installation
${data.installation}

# Usage
${data.usage}

# Tests
${data.tests}


# Questions
If you have any questions, please contact ${data.githubUserName} via github .

`;
}

module.exports = generateMarkdown;

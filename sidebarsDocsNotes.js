

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    sidebarsDocsNotes: [
      {
        type: 'autogenerated',
        dirName: '.' // This must remain `.` if your new docs instance is in the base directory
      }
    ],
  
    // But you can create a sidebar manually
    /*
    tutorialSidebar: [
      {
        type: 'category',
        label: 'Tutorial',
        items: ['hello'],
      },
    ],
     */
  };
  
  module.exports = sidebars;
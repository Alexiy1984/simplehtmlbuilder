// const panelsDefaults = require("./panelsDefaults.js");
const ManagersSettings = require("./ManagersSettings");
const panelsDefaults = require("./PanelsDefauts");

const editorSettings = {
  // Indicate where to init the editor. You can also pass an HTMLElement
  container: '#gjs',
  // Get the content for the canvas directly from the element
  // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
  fromElement: true,
  // Size of the editor
  height: '100%',
  width: 'auto',
  // Default panels settings
  // Managers section 
  panels: panelsDefaults,
  storageManager: ManagersSettings.styleManager,
  blockManager: ManagersSettings.blockManager,
  layerManager: ManagersSettings.layerManager,
  selectorManager: ManagersSettings.selectorManager,
  styleManager: ManagersSettings.styleManager,
  traitManager: ManagersSettings.traitManager,
  deviceManager: ManagersSettings.deviceManager,
};

module.exports = editorSettings;

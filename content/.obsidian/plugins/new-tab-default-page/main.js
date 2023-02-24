/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var g=Object.create;var o=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty;var r=i=>o(i,"__esModule",{value:!0});var b=(i,e)=>{r(i);for(var t in e)o(i,t,{get:e[t],enumerable:!0})},f=(i,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of u(e))!m.call(i,a)&&a!=="default"&&o(i,a,{get:()=>e[a],enumerable:!(t=h(e,a))||t.enumerable});return i},l=i=>f(r(o(i!=null?g(w(i)):{},"default",i&&i.__esModule&&"default"in i?{get:()=>i.default,enumerable:!0}:{value:i,enumerable:!0})),i);b(exports,{default:()=>p});var s=l(require("obsidian"));var n=l(require("obsidian")),d=class extends n.PluginSettingTab{constructor(e,t){super(e,t);this.plugin=t}display(){let{containerEl:e}=this;e.empty(),new n.Setting(e).setName("New Tab opens\u2026").setDesc("What to open when a new tab is created. (Except for the new tab page, the respective plugin needs to be enabled.)").addDropdown(t=>{t.addOption("new-tab-page","New Tab Page").addOption("daily-notes","Daily Note (Core Plugin)").addOption("periodic-notes:open-daily-note","Daily Note (Periodic Notes Plugin)").addOption("periodic-notes:open-weekly-note","Weekly Note (Periodic Notes Plugin)").addOption("periodic-notes:open-monthly-note","Monthly Note (Periodic Notes Plugin)").addOption("random-note","Random Note (Core Plugin)").addOption("switcher:open","Quick Switcher (Core Plugin)").addOption("obsidian-another-quick-switcher:search-command_recent-search","Another Quick Switcher").setValue(this.plugin.settings.whatToOpen).onChange(async a=>{this.plugin.settings.whatToOpen=a,await this.plugin.saveSettings()})}),new n.Setting(e).setName("Default New Tab Page").setDesc("Path of the note that will be opened in new tabs. Images and PDFs also work. Only takes effect when the setting above is 'New Tab Page'.").addText(t=>t.setPlaceholder("Meta/Homepage.md").setValue(this.plugin.settings.filePath).onChange(async a=>{this.plugin.settings.filePath=a,await this.plugin.saveSettings()})),new n.Setting(e).setName("Mode").setDesc("Select the mode in which the default new tab page will be opened.").addDropdown(t=>{t.addOption("obsidian-default","Obsidian Default").addOption("live-preview","Live Preview").addOption("reading-mode","Reading Mode").addOption("source-mode","Source Mode").setValue(this.plugin.settings.mode).onChange(async a=>{this.plugin.settings.mode=a,await this.plugin.saveSettings()})})}};var P={whatToOpen:"new-tab-page",filePath:"",mode:"obsidian-default"},p=class extends s.Plugin{async onload(){await this.loadSettings(),this.addSettingTab(new d(this.app,this)),app.workspace.onLayoutReady(()=>{let e=new WeakSet;app.workspace.iterateAllLeaves(t=>{e.add(t)}),this.registerEvent(app.workspace.on("layout-change",()=>{this.checkForNewTab(e)}))}),console.log("New Tab Default Page Plugin loaded.")}async loadSettings(){this.settings=Object.assign({},P,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}async onunload(){console.log("New Tab Default Page Plugin unloaded.")}checkForNewTab(e){app.workspace.iterateAllLeaves(t=>{e.has(t)||(e.add(t),!!this.tabIsEmpty(t)&&(this.settings.whatToOpen==="new-tab-page"?this.openDefaultPage(t):this.runCommand(this.settings.whatToOpen,t)))})}runCommand(e,t){let a=e.includes("switcher")?200:0;setTimeout(()=>{if(!this.tabIsEmpty(t))return;this.app.commands.executeCommandById(e)||new s.Notice("Plugin for the New Tab Page is not enabled.")},a)}tabIsEmpty(e){return!e.view||e.view.getViewType()==="empty"}async openDefaultPage(e){let t=this.settings.filePath;if(!t)return;let a=app.metadataCache.getFirstLinkpathDest(t,"/");if(!Boolean(a)){new s.Notice(`${t} is not a valid path to a note in your vault.`);return}await e.openFile(a),this.setViewMode(e,this.settings.mode)}setViewMode(e,t){let a=e.getViewState();switch(t){case"source-mode":a.state.mode="source",a.state.source=!0;break;case"live-preview":a.state.mode="source",a.state.source=!1;break;case"reading-mode":a.state.mode="preview";break}e.setViewState(a)}};

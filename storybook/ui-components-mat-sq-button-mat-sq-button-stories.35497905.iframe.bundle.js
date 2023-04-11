(self.webpackChunkgymbox=self.webpackChunkgymbox||[]).push([[509],{"./src/app/help/help.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/ui-components/mat-sq-button/mat-sq-button.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"button[mat-stroked-button], .wrapper {\n  height: 6rem;\n  width: 6rem;\n}\n\nbutton[mat-stroked-button] {\n  padding: 0;\n  margin-right: var(--min-content-wrap-margin);\n}\n\nbutton[mat-stroked-button] .wrapper{\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding: 10px;\n}\ndiv {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.main_icon {\n  display: block;\n  font-size: 2rem;\n  margin-top: 0.3rem;\n}\n.caret_icon {\n  display: inline-block;\n  font-size: 1.1rem;\n}\n\n.label {\n  text-align: left;\n  line-height: 1;\n  white-space: initial;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/ui-components/mat-sq-button/mat-sq-button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllDefaults:()=>AllDefaults,Primary:()=>Primary,Secondary:()=>Secondary,SmileIcon:()=>SmileIcon,Tertiary:()=>Tertiary,default:()=>mat_sq_button_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var mat_sq_button_componentngResource=__webpack_require__("./src/app/ui-components/mat-sq-button/mat-sq-button.component.css?ngResource"),mat_sq_button_componentngResource_default=__webpack_require__.n(mat_sq_button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),dialog=__webpack_require__("./node_modules/@angular/material/fesm2020/dialog.mjs");var help_componentngResource=__webpack_require__("./src/app/help/help.component.css?ngResource"),help_componentngResource_default=__webpack_require__.n(help_componentngResource);const help_database_namespaceObject=JSON.parse('{"help_dumbbells":{"title":"Dumbbells","content":"Dumbbells are located at ..."},"help_weights":{"title":"Weights","content":"Weights are located at..."},"help_bike":{"title":"Bike","content":"To start cycling, please ensure the bike is unlocked."},"help_towels":{"title":"Towels","content":"Free Towel Service, please place any used towel in the green bin."},"help_shower":{"title":"Shower","content":"Showers can be used free of charge."},"help_sauna":{"title":"Sauna","content":"Sauna is operated between 10:00 and 19:00, for other times please contact us at: +49 176 99556677."},"help_drinks":{"title":"Drinks","content":"A great selection of non-alcoholic drinks can be found at the fridge next to the changing rooms."}}');var _class;let HelpComponent=((_class=class HelpComponent{constructor(content_ref){this.content_ref=content_ref,this.help_db=help_database_namespaceObject}getHelp(content_ref){return content_ref in this.help_db?this.help_db[content_ref]:{title:"No specific help",content:"Help not found, error code: 404 "+content_ref}}}).ctorParameters=()=>[{type:String,decorators:[{type:core.Inject,args:[dialog.WI]}]}],_class);var mat_sq_button_component_class;HelpComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-help",template:'<h2 mat-dialog-title>{{getHelp(content_ref).title}}</h2>\n<mat-dialog-content class="mat-typography" [innerHTML]="getHelp(content_ref).content">\n</mat-dialog-content>\n<mat-dialog-actions align="end">\n\x3c!--  <button mat-button mat-dialog-close="mat-dialog-close">Cancel</button>--\x3e\n  <button mat-button [mat-dialog-close]="true" cdkFocusInitial>OK</button>\n</mat-dialog-actions>\n',styles:[help_componentngResource_default()]})],HelpComponent);let MatSqButtonComponent=(mat_sq_button_component_class=class MatSqButtonComponent{constructor(dialog){this.dialog=dialog,this.faAngleRight=free_solid_svg_icons.yOZ,this.icon=free_solid_svg_icons.FDd,this.disabled=!1,this.popup=HelpComponent}onClickHandler(){if(void 0===this.help_topic&&this.popup==HelpComponent)console.log("Nothing happened, either define help_topic or popup.");else{this.dialog.open(this.popup,{data:this.help_topic}).afterClosed().subscribe((result=>{console.log(`Dialog result: ${result}`)}))}}},mat_sq_button_component_class.ctorParameters=()=>[{type:dialog.uw}],mat_sq_button_component_class.propDecorators={icon:[{type:core.Input}],help_topic:[{type:core.Input}],disabled:[{type:core.Input}],popup:[{type:core.Input}]},mat_sq_button_component_class);MatSqButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"mat-sq-button",template:'<button mat-stroked-button (click)="onClickHandler()" [disabled]="disabled">\n  <span class="wrapper">\n    <fa-icon [icon]="icon" class="main_icon"></fa-icon>\n    <div>\n      <span class="label"><ng-content></ng-content></span>\n      <fa-icon [icon]="faAngleRight" class="caret_icon"></fa-icon>\n    </div>\n  </span>\n</button>\n',styles:[mat_sq_button_componentngResource_default()]})],MatSqButtonComponent);const mat_sq_button_stories={title:"MatSqButton",component:MatSqButtonComponent},Template=args=>({props:args}),SmileIcon=Template.bind({});SmileIcon.args={icon:free_solid_svg_icons.ctA},SmileIcon.parameters={content:{template:"Example Btn"}};const Primary=()=>({props:{label:"Button",primary:!0}}),Secondary=()=>({props:{label:"😄👍😍💯",backgroundColor:"#ff0"}}),Tertiary=()=>({props:{label:"📚📕📈🤓",backgroundColor:"#ff0"}}),AllDefaults=Template.bind({});SmileIcon.parameters={...SmileIcon.parameters,docs:{...SmileIcon.parameters?.docs,source:{originalSource:"args => ({\n  props: args\n})",...SmileIcon.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"() => ({\n  props: {\n    label: 'Button',\n    primary: true\n  }\n})",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"() => ({\n  props: {\n    label: '😄👍😍💯',\n    backgroundColor: '#ff0'\n  }\n})",...Secondary.parameters?.docs?.source}}},Tertiary.parameters={...Tertiary.parameters,docs:{...Tertiary.parameters?.docs,source:{originalSource:"() => ({\n  props: {\n    label: '📚📕📈🤓',\n    backgroundColor: '#ff0'\n  }\n})",...Tertiary.parameters?.docs?.source}}},AllDefaults.parameters={...AllDefaults.parameters,docs:{...AllDefaults.parameters?.docs,source:{originalSource:"args => ({\n  props: args\n})",...AllDefaults.parameters?.docs?.source}}}}}]);
var doc = require("./index.js");
var ts = require("typescript");
var Survey = require("../survey-library/build/survey-knockout/survey.ko");

doc.setJsonObj(Survey.JsonObject.metaData);

doc.generateDocumentation(
  ["c:/survey.js/Lib/survey-library/src/entries/chunks/model.ts"],
  {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS
  },
  { generateDoc: false, generateJSONDefinition: false, dtsFileName: "test.d.ts" }
);

var reporter = require('cucumber-html-reporter');

jsonDir = process.argv[2]

var options = {
    theme: 'bootstrap',
    jsonDir: jsonDir,
    output: `${jsonDir}/cucumber_report.html`,
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    name: "Probr - Compliance as Code",
    brandTitle: "Synechron Consulting",
};

if (process.argv[3]) {
    options["metadata"] = {
        "App Version": process.argv[3],
    }
}

reporter.generate(options);

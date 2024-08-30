/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    chartType: ComponentFramework.PropertyTypes.EnumProperty<"Pie Chart" | "Bar Chart" | "Column Chart" | "Line Chart">;
    sampleDataSet: ComponentFramework.PropertyTypes.DataSet;
}
export interface IOutputs {
}

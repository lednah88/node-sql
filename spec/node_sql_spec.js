let { Visitor } = require("../src/node_sql");

let visitor = new Visitor();
let visitor1 = new Visitor(
  "Tumi",
  20,
  "09-31-2020",
  "12:00",
  "Sizwe",
  "Thank you!"
);

describe("Visitor", () => {
  it("should check if createTable is defined", () => {
    expect(visitor1.createTable).toBeDefined();
  });
  it("should check if visitor1.instance equals to something", () => {
    expect(visitor1.visitorName).toEqual("Tumi");
  });
  it("should check if addNewVisitor is not undefined", () => {
    expect(visitor1.addNewVisitor).not.toBeUndefined();
  });
  it("should check if deleteVisitor is not null", () => {
    expect(visitor1.deleteVisitor).not.toBe(null);
  });
  it("should check if updateVisitor is defined", () => {
    expect(visitor1.updateVisitor).toBeDefined();
  });
  it("Should check if deleteAllVisitors function is defined", () => {
    expect(visitor.deleteAllVisitors).toBeDefined();
  });
});

describe("Visitor mock test", () => {
  it("spyOn addNewVisitor function", () => {
    spyOn(visitor, "addNewVisitor");
    visitor.addNewVisitor();
    expect(visitor.addNewVisitor).toHaveBeenCalled();
  });
  it("spyOn createTable function", () => {
    spyOn(visitor, "createTable");
    visitor.createTable();
    expect(visitor.createTable).toHaveBeenCalled();
  });
  it("spyOn deleteVisitor function", () => {
    spyOn(visitor, "deleteVisitor");
    visitor.deleteVisitor();
    expect(visitor.deleteVisitor).toHaveBeenCalled();
  });
  it("spyOn updateVisitor function", () => {
    spyOn(visitor1, "updateVisitor");
    visitor1.updateVisitor();
    expect(visitor1.updateVisitor).toHaveBeenCalled();
  });
  it("spyOn viewOneVisitor function", () => {
    spyOn(visitor1, "viewOneVisitor");
    visitor1.viewOneVisitor();
    expect(visitor1.viewOneVisitor).toHaveBeenCalledWith();
  });
});

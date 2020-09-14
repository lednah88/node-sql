let {
  createTable,
  addNewVisitor,
  listAllVisitors,
  deleteVisitor,
  updateVisitor,
  viewOneVisitor,
  deleteAllVisitors,
} = require("../src/app");

describe("Visitor", () => {
  it("should check if createTable is defined", () => {
    expect(createTable).toBeDefined();
  });
  it("should check if addNewVisitor exist", () => {
    expect(addNewVisitor).not.toBeUndefined();
  });
  it("should check if addNewVisitor is defined", () => {
    expect(addNewVisitor).toBeDefined();
  });
  it("should check if listAllVisitors is defined", () => {
    expect(listAllVisitors).toBeDefined();
  });
  it("should check if deleteVisitor is not null", () => {
    expect(deleteVisitor).not.toBe(null);
  });
  it("should check if updateVisitor is defined", () => {
    expect(updateVisitor).toBeDefined();
  });
  it("should check if viewOneVisitor is defined", () => {
    expect(viewOneVisitor).toBeDefined();
  });
  it("Should check if deleteAllVisitors is defined", () => {
    expect(deleteAllVisitors).toBeDefined();
  });
});

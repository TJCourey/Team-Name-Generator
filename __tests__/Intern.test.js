const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const intern = new Intern("TJ", 1, "tj@gmail.com", "DU");

      expect(intern.name).toEqual("TJ");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("tj@gmail.com");
      expect(intern.school).toEqual("DU");
    });
  });
  describe("Functions", () => {
    it("should provide info when the appropriate function is called", () => {
      const intern = new Intern("TJ", 1, "tj@gmail.com", "DU");

      expect(intern.getName()).toEqual("TJ");
      expect(intern.getId()).toEqual(1);
      expect(intern.getEmail()).toEqual("tj@gmail.com");
      expect(intern.getRole()).toEqual("Intern");
      expect(intern.getSchool()).toEqual("DU");
    });
  });
});

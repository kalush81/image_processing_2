import { createFileName } from "../../utils/create-file-name";

it('should create string "fjord200200.jpg" ', () => {
  const queryObj = { filename: "fjord", width: "200", height: "200" };
  const filename = createFileName(queryObj);

  expect(filename).toEqual("fjord200200.jpg");
});

import mergeSortedArray from "./index";

describe("Merge Sorted Array Tests", () => {
  it("nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 returns [1,2,2,3,5,6]", () => {
    let num1 = [1, 2, 3, 0, 0, 0];
    let num2 = [2, 5, 6];
    mergeSortedArray(num1, 3, num2, 3);
    expect(num1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("nums1 = [1], m = 1, nums2 = [], n = 0 returns [1]", () => {
    let num1 = [1];
    let num2 = [];
    mergeSortedArray(num1, 1, num2, 0);
    expect(num1).toEqual([1]);
  });

  it("nums1 = [0], m = 0, nums2 = [1], n = 1 returns [1]", () => {
    let num1 = [0];
    let num2 = [1];
    mergeSortedArray(num1, 0, num2, 1);
    expect(num1).toEqual([1]);
  });
});

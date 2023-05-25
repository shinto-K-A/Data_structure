function moveZeroes(nums) {
      let nonZeroIndex = 0;
    
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
          nums[nonZeroIndex++] = nums[i];
        }
        console.log(nums,'uio');
      }
    
      while (nonZeroIndex < nums.length) {
        nums[nonZeroIndex++] = 0;
      }
    }
    const nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    console.log(nums); // Output: [1, 3, 12, 0, 0]
        
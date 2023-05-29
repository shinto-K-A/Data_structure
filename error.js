function divide(a, b) {
      try {
        if (b === 0) {
          throw new Error('Division by zero');
        }
        return a / b;
      } catch (error) {
        console.log('An error occurred:', error.message);
      } finally {
        console.log('Finally block executed');
      }
    }
    
    console.log(divide(10, 2));
    //console.log(divide(10, 0));
    
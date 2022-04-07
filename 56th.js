const someObj = {
    propName: "John"
  };
  
  function propPrefix(str) {
    const s = "prop";
    return s + str;
  }
  
  const someProp = propPrefix("Name");
  console.log(someObj[someProp]);
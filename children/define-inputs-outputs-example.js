Meemoo
  .setInfo({ 
    title: "example", 
    author: "forresto", 
    description: "this script makes a Meemoo module" 
  })   
  .addInputs({ 
    square: { 
      action: function (n) { 
        Meemoo.send("squared", n*n); 
      }, 
      type: "number" 
    }, 
    reverse: { 
      action: function (s) { 
        var reversed = s.split("").reverse().join(""); 
        Meemoo.send("reversed", reversed); 
      }, 
      type: "string" 
    } 
  }) 
  .addOutputs({ 
    squared: { 
      type: "number" 
    }, 
    reversed: { 
      type: "string" 
    } 
  });
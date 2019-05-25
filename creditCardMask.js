// INSTRUCTIONS: /////////////////////////////////////////////////////////////////////////////////////
/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most 
secret question is still correct. However, since someone could look over your shoulder, you don't want that shown 
on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/
// EXAMPLES ///////////////////////////////////////////////////////////////////////////////////////////
/*
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/

//TESTS ///////////////////////////////////////////////////////////////////////////////////////////////
/*
describe("maskify", function(){
  it("should work for some examples", function(){
    Test.assertEquals(maskify('4556364607935616'), '############5616');
    Test.assertEquals(maskify('1'), '1');
    Test.assertEquals(maskify('11111'), '#1111');
  });
});
*/

// MY SOLUTION /////////////////////////////////////////////////////////////////////////////////////

function maskify(cc) {
  let count = cc.length, mask='';
  if(count >3){ //taking sure the string have more than 4 characters
    count = count -4 //taken the numbers of # that I gonna use it
  }else if(count =>4){ //if don't have it, return the same string
    return cc;
  }
  for(let i=0; i<count; i++){ //doing the exact numbers of # for the string
    mask = mask + '#';
  }
  return mask + cc.substr(mask.length) //the number of # is taken and the last 4 characters of the string are concatenated

}

// A BETTER ONE: 
/*
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
*/
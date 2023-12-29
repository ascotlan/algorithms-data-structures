function collectStrings(obj){
  let result = [];
  for(let key in obj){
    if(typeof obj[key] === "string"){
      result = result.concat(obj[key])
    }else{
      result = result.concat(collectStrings(obj[key]));
    }
  }
  return result;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])

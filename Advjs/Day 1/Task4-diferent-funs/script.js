function reverseParamsOne() {
  let args = [].reverse.call(arguments);
  return args;
}
function reverseParamsTow() {
  let args = [].reverse.bind(arguments)();
  return args;
}
console.log(reverseParamsOne("a", "b", "c"));
console.log(reverseParamsTow(1,2,3));
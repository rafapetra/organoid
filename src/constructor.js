export function Constructor(paramater1, paramater2, paramater3) {
  this.firstParamater = paramater1;
  this.secondParamater = paramater2;
  this.thirdParamater = paramater3;
}

export function Constructor2(paramater) {
  this.firstParamater = paramater;
}

Constructor.prototype.checkType = function() {
  return "Test";
};
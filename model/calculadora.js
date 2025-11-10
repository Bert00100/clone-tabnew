function soma(number01, number02) {
  if (typeof number01 == "string") {
    return "Error";
  }
  return number01 + number02;
}

exports.somar = soma;

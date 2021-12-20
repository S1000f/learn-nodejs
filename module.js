exports.abs = function (number) {
  if (number > 0) {
    return number;
  } else {
    return -number;
  }
};

exports.circleArea = (radius) => radius * radius * Math.PI;
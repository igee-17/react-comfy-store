// domain/.netlify/functions/lab

const item = {
  id: 1,
  name: "susan",
};

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(item),
  };
};

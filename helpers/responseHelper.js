// responseHelper.js

const successResponseCreateData = (res, message, data, code = 201) => {
  return res.status(code).send({
    status: "success",
    code,
    message,
    data,
  });
};

const successResponseGetData = (res, message, data, code = 200) => {
  return res.status(code).send({
    status: "success",
    code,
    message,
    data,
  });
};

const errorServerResponse = (res, message, code = 500) => {
  return res.status(code).send({
    status: "error",
    code,
    message,
  });
};

const errorClientResponse = (res, message, code) => {
  return res.status(code).send({
    status: "error",
    code,
    message,
  });
};

module.exports = {
  successResponseCreateData,
  successResponseGetData,
  errorServerResponse,
  errorClientResponse,
};

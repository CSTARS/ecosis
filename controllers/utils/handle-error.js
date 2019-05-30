module.exports = (res, e) => {
  res.status(500).json({
    error: true,
    message : e.message,
    stack : e.stack
  });
}
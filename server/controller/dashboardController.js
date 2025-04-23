const getDashboard = (req, res) => {
  res.status(200).json({
    message: `Welcome to your dashboard, ${req.user.email}`,
    user: req.user,
  });
};
module.exports = { getDashboard };

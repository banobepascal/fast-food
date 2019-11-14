
const admin = (req, res, next) => {
  if (!req.user._isAdmin) {
    return res.status(403).json({
      status: 403,
      message: 'Resource only accessible by Admin',
    });
  }
  next();
};

export default admin;

const jwt = require('jsonwebtoken'); // permettra de faire appel à jsonwebtoken

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // On récupère le token dans le header
    const decodedToken = jwt.verify(token, '56391random2581secret9851key'); // On demande à jwt de décoder le token récupéré
    const userId = decodedToken.userId; // On vérifie que l'id du token correspond à celui du user
    console.log(userId);
    if (req.body.userId && req.body.userId !== userId) { // si le user id de la requête est différent de celui du token
      throw 'Invalid user ID'; 
    } else {
      req.user = decodedToken;
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};
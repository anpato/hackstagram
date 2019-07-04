const express = require('express');
const AppRouter = express.Router();

AppRouter.get('/protected', (req, res, next) => {
    console.log('***Req protected route***', req);
    
    res.json({
        msg: 'Authenticated',
        user: req.user, 
    });
});

module.exports = AppRouter;
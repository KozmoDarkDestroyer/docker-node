const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({
        ok: true,
        message: 'Hello World ;D'
    });
});

module.exports = router;

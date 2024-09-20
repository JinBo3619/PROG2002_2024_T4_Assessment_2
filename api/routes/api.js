const express = require('express');
const router = express.Router();
const db = require('../db/crowdfunding_db');

router.get('/fundraisers', (req, res) => {
  db.query('SELECT a.*,b.`NAME`AS CATEGORY_NAME FROM FUNDRAISER a LEFT JOIN CATEGORY b ON a.CATEGORY_ID = b.CATEGORY_ID WHERE a.ACTIVE = 1', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

module.exports = router;
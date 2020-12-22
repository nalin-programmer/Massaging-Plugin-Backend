const express = require("express");
const router = express.Router();
const { new_message, past_message } = require("../controllers/messages");
const { requireSignin } = require("../middlewares/index");
const {
  MessageValidated,
  isMessageValidated,
} = require("../validators/message");

router.post("/new_message",  requireSignin,  MessageValidated,  isMessageValidated,  new_message);
router.post("/past_message", past_message);

module.exports = router;
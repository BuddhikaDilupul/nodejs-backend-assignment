const CronJob = require("node-cron");
const { mailService } = require("../services/mailer");
const { likeCount } = require("../controllers/author.controller");

exports.initScheduledJobs = () => {

  const getLikes = CronJob.schedule("*/0.5 * * * *",  async(req, res, next) => {
    console.log("I'm executed on a schedule!");
    const file =likeCount()
    console.log(file)

  });
  getLikes.start();
};

const CronJob = require("node-cron");
const { likeCount } = require("../controllers/author.controller");

exports.initScheduledJobs = () => {

  const getLikes = CronJob.schedule("*/1 * * * *",  async(req, res, next) => {
    console.log("I'm executed on a schedule!");
    likeCount()
  });
  getLikes.start();
};

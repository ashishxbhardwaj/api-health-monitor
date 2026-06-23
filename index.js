#!/usr/bin/env node

const chalk = require("chalk");
const axios = require("axios");
const url = process.argv[2];

async function checkapi() {
  const start = Date.now();

  try {
    const response = await axios.get(url);

    const end = Date.now();

    const duration = end - start;

    console.log();

    console.log("URL:", url);
    console.log("Time:", new Date().toLocaleTimeString());

    console.log("Status:", response.status);
    console.log("Response Time: " + duration + "ms");

    if (response.status == 200 && duration <= 200) {
      console.log(chalk.green("Condition: Healthy"));
    } else if (response.status == 200 && duration < 1000) {
      console.log(chalk.yellow("Condition: Slow"));
    } else {
      console.log(chalk.red("Condition: Bad"));
    }
  } catch (err) {
    console.log("URL:", url);
    console.log(chalk.red("Condition: DOWN"));
  }
}
if (!url) {
  console.log("Please provide a URL");
  console.log("Example: node index.js https://api.github.com");
} else {
  checkapi();
}

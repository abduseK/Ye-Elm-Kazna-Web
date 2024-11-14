const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Fetch the latest commit date using git log command
try {
  const lastCommitDate = execSync(
    "git log -1 --format=%cd --date=format:'%b %d, %Y'"
  )
    .toString()
    .trim();

  // Create or update lastCommitDate.json with the new date
  const filePath = path.join(__dirname, "lastCommitDate.json");
  const data = { date: lastCommitDate };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  console.log(`✅ Last commit date updated to: ${lastCommitDate}`);
} catch (error) {
  console.error("❌ Error fetching last commit date:", error);
}

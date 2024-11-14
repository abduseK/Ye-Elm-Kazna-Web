const { execSync } = require("child_process");
const fs = require("fs");

try {
  // Run Git command to get the last commit date in ISO format
  const commitDate = execSync("git log -1 --format=%cI").toString().trim();

  // Convert it to the desired format (e.g., "Mar 21, 2023")
  const dateObj = new Date(commitDate);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);

  // Write the date to a JSON file for easy import in your app
  fs.writeFileSync(
    "lastCommitDate.json",
    JSON.stringify({ date: formattedDate })
  );
  console.log("Last commit date updated:", formattedDate);
} catch (error) {
  console.error("Error fetching last commit date:", error);
}

import { danger, fail, message, warn } from 'danger';

// Check for PR description
if (danger.github.pr.body.length < 50) {
  fail('Please provide a meaningful description for this PR (at least 50 characters).');
} else if (danger.github.pr.body.length < 100) {
  warn('Consider adding more detail to the PR description.');
}

// Check for screenshots or visual representation
const hasScreenshot =
  danger.github.pr.body.includes('![') ||
  danger.github.pr.body.includes('<img') ||
  danger.github.pr.body.toLowerCase().includes('screenshot') ||
  danger.github.pr.body.toLowerCase().includes('screen recording');
if (!hasScreenshot) {
  warn(
    'Consider adding a screenshot or screen recording to your PR description for visual changes.',
  );
}

// Existing checks...
const changedFiles = danger.git.modified_files.concat(danger.git.created_files);

// Check for test files
const hasTestChanges = changedFiles.some((file) => file.includes('test') || file.includes('spec'));
if (!hasTestChanges) {
  warn('This PR does not include any test changes. Do you need to add tests?');
}

// Check for large PRs
if (danger.github.pr.additions + danger.github.pr.deletions > 500) {
  warn('This PR is quite large. Consider splitting it into smaller PRs if possible.');
}

// Encourage using React Hooks
const hasReactComponents = changedFiles.some((file) => file.endsWith('.tsx'));
if (hasReactComponents) {
  message('Remember to use React Hooks where appropriate!');
}

// Check for package.json changes
const packageChanged = danger.git.modified_files.includes('package.json');
const lockfileChanged = danger.git.modified_files.includes('yarn.lock');
if (packageChanged && !lockfileChanged) {
  warn('Changes were made to package.json, but not to yarn.lock');
  message('Perhaps you need to run `yarn install`?');
}

// Encourage adding to CHANGELOG for feature files
const hasChangelogChanges = changedFiles.some((file) => file.includes('CHANGELOG'));
const hasFeatureChanges = changedFiles.some((file) => file.includes('feature'));
if (hasFeatureChanges && !hasChangelogChanges) {
  warn('This PR may require a CHANGELOG entry. Please check if you need to add one.');
}

# Temu Auto Expand Script

This Tampermonkey script enhances the Temu product page browsing experience.

## Features

- Automatically clicks the "See all details" button to expand product information.
- Automatically clicks the "See more" button.
- Implements an auto-scroll feature that scrolls down to the "Explore your interests" section and then back to the top, configurable for a number of cycles. This is intended to help load dynamic content or simply navigate the page section.

## Configuration

The script includes settings that can be adjusted:
- `scrollCycles`: Number of times the script scrolls down and up (default: 2).
- `scrollDuration`: Duration of one scroll movement in milliseconds (default: 2000ms).
- `pauseDuration`: Pause between scroll movements in milliseconds (default: 500ms).

To modify these, you'll need to edit the script directly via the Tampermonkey dashboard.

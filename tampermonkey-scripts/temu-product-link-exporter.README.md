# Temu Product Link Exporter

This Tampermonkey script is designed for use on Temu category and search result pages. It allows you to select multiple products and export their direct web links into a `.txt` file.

## Features

- **Product Selection**: Adds a checkbox next to each product item's star rating on the page.
- **Export Functionality**: Provides an "Export Selected Links" button (fixed at the bottom-right of the page).
- **TXT File Output**: When the export button is clicked, all selected product links are saved into a file named `temu_links.txt`.
- **Dynamic Content Handling**: Automatically adds checkboxes to products that are loaded dynamically as you scroll down the page.

## How to Use

1.  **Installation**: Install this script via Tampermonkey in your browser.
2.  **Navigate to Temu**: Go to a Temu category page or search results page (e.g., `https://www.temu.com/womens-clothing-o3.html` or any page listing multiple products).
3.  **Select Products**: Click the checkboxes that appear beside each product's rating that you wish to export.
4.  **Export Links**: Click the "Export Selected Links" button located at the bottom-right of your screen.
5.  **Save File**: Your browser will prompt you to save a `temu_links.txt` file containing the URLs of your selected products.

## Notes

- The checkboxes are positioned near the star rating of each product. The script attempts to find the specific rating element described by the user: `<div class="_2aMrMQeS _1QhQr8pq"><div class="_3UEP91lE" role="region"><div class="oMRVEXZ7 _19DJKl1C">...</div></div></div>`.
- If no products are selected when you click export, you will receive an alert.
- The script tries to handle products loaded as you scroll using a MutationObserver. If you encounter issues with newly loaded items not getting checkboxes immediately, scrolling a bit more or waiting a moment might help.

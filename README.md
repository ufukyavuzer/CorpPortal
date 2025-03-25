# CorpPortal

CorpPortal is a dynamic, JSON-driven internal company portal built with PHP, JavaScript, and Bootstrap. It provides a centralized interface for employees to access various company systems, resources, and documentation through a clean, responsive design.

## Features
- **Dynamic Content**: All links and modal content are managed through a single JSON file (`indexBack.json`)
- **Responsive Design**: Built with Bootstrap for mobile-friendly access
- **Modular Structure**: Easy to maintain and update via JSON configuration
- **Search Integration**: Includes a Google search bar with tracking capability
- **Modal System**: Organized documentation and resources in pop-up modals
- **Secure Session Handling**: Uses PHP session management with HTTP-only cookies

## Project Structure
    CorpPortal/
    ├── images/
    │   ├── android-chrome-192x192.png   # Android Chrome icon (192x192)
    │   ├── android-chrome-512x512.png   # Android Chrome icon (512x512)
    │   ├── apple-touch-icon.png         # Apple touch icon
    │   ├── favicon-16x16.png            # Favicon small
    │   ├── favicon-32x32.png            # Favicon medium
    │   ├── favicon.ico                  # Favicon main
    │   ├── logo_google.png              # Google logo
    │   └── logo.png                     # Company logo
    ├── style/
    │   ├── bootstrap.min.css            # Bootstrap CSS framework
    │   ├── customm.css                  # Custom styles for index
    │   ├── font-awesome.min.css         # Font Awesome icons
    │   ├── style.css                    # Portal styles
    │   ├── style_fonts.css              # Portal font styles
    │   ├── jquery.min.js                # jQuery library
    │   ├── tether.min.js                # Tether for Bootstrap
    │   └── bootstrap.min.js             # Bootstrap JavaScript
    ├── index.php                        # Main portal page
    ├── indexBack.json                   # Configuration and content data
    ├── scripts.js                       # Dynamic content generation logic
    └── README.md                        # This file

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/ufukyavuzer/CorpPortal.git

2. Place the project in your web server directory (e.g., Apache, Nginx)

3. Ensure PHP is installed and configured on your server

4. Verify all dependencies in `style/` are present:
   - Bootstrap 4
   - jQuery
   - Tether
   - Font Awesome

5. Update `indexBack.json` with your specific links and content

6. Ensure the `images/` directory contains your logo file

7. Access the portal through your web server (e.g., `http://localhost/CorpPortal/`)

---

## Configuration
All portal content is managed through `indexBack.json`. The file is structured as follows:

- `header`: Contains the page title, logo path, and main URL
- `mainLinks`: Array of primary navigation items (links or modals)
- `modals`: Object containing modal definitions with titles and item lists

To customize:
1. Edit `indexBack.json` with your specific URLs, icons, and text
2. Adjust paths in `index.php` if your directory structure differs
3. Modify `custom.css` for visual styling changes

## Usage
- The portal loads dynamically based on `indexBack.json`
- Main links either navigate directly or open modals
- Modals display lists of resources (videos, PDFs, etc.)
- The Google search bar tracks usage via console logs

## Dependencies
- PHP 7+ (for session handling)
- Bootstrap 4
- jQuery
- Tether
- Font Awesome

## License
This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Notes
- This is an anonymized version of an internal company portal
- Sample data in `indexBack.json` uses generic `example.com` domains
- Customize the JSON file for your specific use case


# NMR Display Project

## Overview

The NMR Display Project is an interactive web-based tool designed to help visualize and understand the processes behind Nuclear Magnetic Resonance (NMR) spectroscopy. The project contains an array of detailed content about how NMR works, chemical shifts, and the elements involved, and it provides an interactive and informative experience for users. The tool displays key concepts in NMR through structured text, interactive components, and graphical representations.

## Features

- **Interactive NMR Concepts**: Visualize and explore different aspects of NMR, such as chemical shifts, sample analysis, and more.
- **Educational Content**: Provides rich descriptions and explanations about NMR technology, from the superconducting magnet to the transformation of the acquired data.
- **Chemical Shift Data**: Allows users to understand the concept of chemical shifts in NMR with real-world examples.
- **Modular Architecture**: The application is structured in a modular way to allow easy additions of new concepts and improvements.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the app.
- **TypeScript**: For type safety and improved development experience.
- **Markdown**: For content organization and display.
- **JavaScript ES6 Features**: For clean and efficient code.

## Setup

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm or yarn

### Installing

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nmr-display.git
   cd nmr-display
   ```

2. Install dependencies:

   ```bash
   npm install
   # or if using yarn
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or if using yarn
   yarn dev
   ```

4. Open your browser and visit `http://localhost:3000` to view the application.

## Usage

Once the app is running, you can:

- Browse through different NMR concepts, such as "The Magnet", "The Sample", and "The Field."
- Explore chemical shifts and how they affect NMR spectra.
- Learn how to interpret NMR data and apply this knowledge to real-world examples like ethanol and methanol.

### Examples

#### Chemical Shift Data

The `ChemicalShiftData` array contains several examples explaining how chemical shifts are visualized, with interactive components for better understanding. The data includes:

- Descriptions of shielded vs. deshielded atoms
- Real-world chemical examples such as ethanol and methanol

## How to use the Raspberry PI startup script
1. Download the file named startup.txt and upload it unto the Raspberry PI
2. Rename the file from ```startup.txt to startup.sh``` and run ```chmod +x ./startup.sh``` on the filepath where the startup script exist to make it runnable
3. Run
   ```bash
   sudo nano /etc/systemd/system/THE_NAME_OF_YOUR_SERVCE.service
   ```
4. Add this into that service
   ```
   [Unit]
   Description=Start npm dev server + Django server on boot
   After=graphic.target network-online.target
   Wants=graphic.target network-online.target

   [Service]
   Type=simple
   User=printeros
   WorkingDirectory=/home/printeros
   ExecStart=/home/printeros/scripts/start_servers.sh (this is just an example this path should link to where you saved the startup script)
   Restart=on-failure
   RestartSec=5

   [Install]
   WantedBy=multi-user.target
   ```
5. Ctrl + X, then Y, then Enter to save this new daemon service
6. Run the following commands to save, start and enable running this daemon service on start or reboot of the Raspberry Pi
   ```bash
   sudo systemctl daemon-reload
   sudo systemctl enable THE_NAME_OF_YOUR_SERVCE.service
   sudo systemctl start THE_NAME_OF_YOUR_SERVCE.service
   ```
7.  If you ever edit the daemon service you can relaod it like this
   ```bash
   sudo systemctl enable THE_NAME_OF_YOUR_SERVCE.service
   sudo systemctl restart THE_NAME_OF_YOUR_SERVCE.service
   ```
8. To see the status and logs of your daemon service for like errors and others run these
   ```bash
   sudo systemctl status THE_NAME_OF_YOUR_SERVCE.service
   # or
   journalctl -u THE_NAME_OF_YOUR_SERVCE.service --no-pager
   ```

## How to use and contribute/adjust the LED effects

The LED lights will light up when you click on the components in the page: "Diagram of Components".

Below is the steps how this LED works:
1. In the Diagram.tsx file, the calling API endpoint is const API_URL = "http://localhost:8000/lighting-controller/"; which link to the port running [Standard-Lighting-API](https://github.com/Knox-College-Makerspace-Network/Standard-Lighting-API.git). Also, there are 2 ports running simultaneously, one is the NMR Display backend and one is the Standard Lighting API (port 8000 and 8001 for example). 

2. You can change the LED effects by modifying the JSON request. I recommend to use the traverse_segment function as it is the most convenience one so far. 
More specific in [Standard-Lighting-API](https://github.com/Knox-College-Makerspace-Network/Standard-Lighting-API.git) and [LEDcontrol_pico_micropython](https://github.com/Knox-College-Makerspace-Network/LEDcontrol_pico_micropython.git).

## How to Contribute

We welcome contributions to improve this project. Here’s how you can get involved:

1. **Fork the repository**: Click the "Fork" button at the top of the repository.
2. **Clone your fork**: Clone the forked repository to your local machine.
   
   ```bash
   git clone https://github.com/yourusername/nmr-display.git
   ```

3. **Create a branch**: Make sure to create a new branch for your changes.
   
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make changes**: Make your changes, whether it’s adding new content, fixing bugs, or improving styling.
   
5. **Commit changes**: Commit your changes with a meaningful message.

   ```bash
   git commit -m "Describe your changes here"
   ```

6. **Push your changes**: Push the changes to your forked repository.

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a pull request**: Open a pull request with a detailed description of the changes you made.

## Code Style

- Use **TypeScript** for type safety.
- Write **clean and modular** code.
- Follow **ESLint** and **Prettier** guidelines for consistent formatting.
- Add **JSDoc comments** for functions and complex logic to explain why certain decisions were made.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- The NMR concepts and educational content were sourced from NMR research and resources.
- Special thanks to the contributors who help maintain and improve this project.

## Contact

Feel free to reach out if you have any questions or suggestions.

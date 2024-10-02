# Zaprite Pubkey Bar "Zap a Round" Demo

## Overview

This project demonstrates a simple implementation of the "Zap a Round" feature for Pubkey Bar using the Zaprite API. It allows customers to purchase preset amounts of drinks as an open gift certificate using Bitcoin and Lightning Network payments.

**IMPORTANT: This is for demonstration purposes only and should not be used in a production environment without significant security enhancements and proper error handling.**

## Project Structure

- `public/index.html`: Frontend interface for the "Zap a Round" feature
- `server.mjs`: Backend server handling API requests and Zaprite integration
- `package.json`: Project dependencies and scripts

## Setup and Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

## Key Features

- Simple web interface for selecting and purchasing drink rounds
- Integration with Zaprite API for payment processing
- Basic error handling and logging

## Areas Needing Update for Production Use

1. **API Key Security**: The API key is currently hardcoded in the server file. This should be moved to a secure environment variable.

2. **Error Handling**: Implement more robust error handling throughout the application, especially in the API calls and payment processing.

3. **Input Validation**: Add thorough input validation on both client and server sides.

4. **HTTPS**: Ensure the application is served over HTTPS in a production environment.

5. **Logging**: Implement proper logging for debugging and monitoring purposes.

6. **Testing**: Add comprehensive unit and integration tests.

7. **UI/UX**: Enhance the user interface for a better user experience.

8. **Responsive Design**: Make the frontend responsive for various device sizes.

9. **Payment Confirmation**: Implement a proper payment confirmation mechanism.

10. **Order Management**: Add functionality to manage and track orders.

11. **Security Headers**: Implement necessary security headers in the server responses.

12. **Rate Limiting**: Add rate limiting to prevent abuse of the API.

13. **CORS Configuration**: Configure CORS settings appropriately for production use.

## Disclaimer

This code is provided as-is for demonstration purposes only. It is not production-ready and should not be used in a live environment without significant improvements in security, error handling, and overall robustness.
# Revolutionizing Data Security: Embracing SSI, ZKPs, and Polygon ID in Modern Systems

In an era dominated by online interactions, our digital identities are at the forefront of our concerns. The constant fear of data breaches and unauthorized access to personal information has underscored the vulnerabilities inherent in traditional digital identity systems. Imagine the unsettling scenario of Aadhaar cards leaking or banks falling victim to cyberattacks regularly. The need for a secure and user-centric solution has never been more pressing.

## Table of Contents
- [Revolutionizing Data Security: Embracing SSI, ZKPs, and Polygon ID in Modern Systems](#revolutionizing-data-security-embracing-ssi-zkps-and-polygon-id-in-modern-systems)
  - [Table of Contents](#table-of-contents)
  - [Project Description](#project-description)
  - [Verifiable Credentials](#verifiable-credentials)
  - [Schema Links](#schema-links)
  - [Quick Start](#quick-start)
    - [Requisites](#requisites)
    - [Setup](#setup)
      - [Backend](#backend)
      - [Frontend](#frontend)
  - [Credits](#credits)
  - [License](#license)

## Project Description

Our project aims to address the vulnerabilities in traditional digital identity systems by leveraging Self-Sovereign Identity (SSI), Zero-Knowledge Proofs (ZKPs), and the Polygon ID platform. This initiative is driven by the urgent need for a more secure and user-centric approach to digital identity in the face of increasing cyber threats and data breaches.

## Verifiable Credentials

The application issues four verifiable credentials using the Polygon ID issuer node:

1. **National ID Card:**
   - Required by the employer to issue employee salary credentials & laboratory to issue lab reports.

2. **Employee Schema:**
   - Required by the insurance company to issue insurance credentials.

3. **Lab Schema:**
   - Required by the insurance company to issue insurance credentials.

4. **Insurance Schema:**
   - Issued after verifying both employee and lab verifiable credentials.

## Schema Links

- [Employment Schema](https://schema-builder.polygonid.me/schemas/d9263bc8-39f4-465a-a5de-ecdfc441ad31)
- [National ID Schema](https://schema-builder.polygonid.me/schemas/a4b263d2-149b-4053-87b7-7a3d27151713)
- [Lab Schema](https://schema-builder.polygonid.me/schemas/0b524eb5-f7d1-42a9-8f7d-559a100a35c5)
- [Insurance Schema](https://schema-builder.polygonid.me/schemas/4ced05e3-7efe-43b0-ae5d-c923c9bd21bd)

## Quick Start

### Requisites

To successfully run this project, ensure you have the following:
- Polygon ID application to receive and verify Verifiable Credentials.
- NGROK Auth Token for verification.
- RPC_URL: To check the status of VCs on-chain (can be obtained from Alchemy/Infura/QuickNode).

### Setup

#### Backend

1. **Clone the repository:**

    ```bash
    git clone https://github.com/virajpatva/ethindia-ssi.git
    cd ethindia-ssi/backend
    ```

2. **Copy .env.example to .env:**

    ```bash
    cp .env.example .env
    ```

3. **Set the required environment variables in .env:**

    ```bash
    # Example:
    RPC_URL_MUMBAI=<Obtain from coordinators or create from Alchemy/Infura/rpc.maticvigil.com>
    NGROK_URL=<Run `ngrok http 4007` and set up an auth token if not set previously>
    ```

4. **Install packages:**

    ```bash
    npm install
    ```

5. **Run the backend application:**

    ```bash
    npm run dev
    ```

#### Frontend

1. **Clone the repository:**

    ```bash
    git clone https://github.com/virajpatva/ethindia-ssi.git
    cd ethindia-ssi/frontend
    ```

2. **Copy .env.example to .env:**

    ```bash
    cp .env.example .env
    ```


4. **Install dependencies:**

    ```bash
    yarn
    ```

5. **Start the project on localhost:5173:**

    ```bash
    yarn dev
    ```

## Credits

- **SmartSense Team:** Development support for the project.
- **Polygon ID Team:** Assistance during the hackathon to build the project.

## License

This project is licensed under the [MIT License](LICENSE).

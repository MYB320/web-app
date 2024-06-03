# Next.js 14 Web App

This is a web application built using Next.js 14, styled with Tailwind CSS, and utilizing ShadCN-UI components. The application fetches data from the FakeStoreAPI.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/myb320/web-app.git
   cd web-app
   ```

2. **Install dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```sh
   npm install
   ```

3. **Run the development server:**

   ```sh
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. **Fetch Data:**
   The application fetches product data from the FakeStoreAPI and displays it in a styled layout.

2. **Styling:**
   Tailwind CSS is used for styling the application, providing utility-first CSS classes. ShadCN-UI is used for additional UI components and design elements.

3. **API Integration:**
   The application integrates with [FakeStoreAPI](https://fakestoreapi.com/) to fetch and display product information.

## Features

- **Next.js 14**: The latest version of Next.js for building fast and scalable web applications.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **ShadCN-UI**: A component library for beautiful and customizable UI components.
- **FakeStoreAPI Integration**: Fetch and display product data from FakeStoreAPI.

## File Structure

```plaintext
your-project/
├── public/
│   ├── favicon.ico
│   └── signin.jpg
├── src/
│   ├── components/
│   │
│   ├── app/
│   │   ├── api/
│   │   │   └── login/
│   │   │       └── route.ts
│   │   ├── singup/
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   ├── cart/
│   │   │   │   └── page.tsx
│   │   │   ├── context.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.ts
│   │   └── page.ts
│   └── lib/
│       ├── fetch.ts
        ├── interface.ts
        └── utils.ts
├── .gitignore
├── README.md
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── yarn.lock
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

This README provides a comprehensive overview of your project, including installation instructions, usage guidelines, feature descriptions, and contribution instructions. Adjust the content as needed to fit the specifics of your project and repository.
```

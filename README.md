# Inventors Website Frontend

This repository contains the front-end code for the Inventors website. The project is built using Next.js 14, TypeScript, and Tailwind CSS.

> Please always remember to pull the latest changes with `git pull` and make sure you always work on a new branch for each issue you are working on!

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/InventorsDev/inventors-frontend.git
    ```

2. Navigate to the project directory:
    ```sh
    cd inventors-frontend
    ```

3. Install the dependencies:
    ```sh
    npm i
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```
    This will start the Next.js development server on http://localhost:3000.

## Contributing

We welcome contributions to the project. To get started, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
    ```sh
    git checkout -b feature/my-new-feature
    ```
3. Make your changes and commit them:
    ```sh
    git commit -am 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature/my-new-feature
    ```
5. Create a pull request to the `main` branch of the original repository. Make sure to attach the issue number and tick all the boxes in the issue.

## Some useful information
1. If you need to use any icon in this project, we have installed the `react-icons` package, which provides a wide range of icons. You can find the list of icons [here](https://react-icons.github.io/react-icons/).

All you have to do is import the icon you need and use it in your component. For example:
```tsx
import { FaGithub } from 'react-icons/fa';

const MyComponent = () => {
    return (
        <div>
            <FaGithub />
        </div>
    );
};
```

2. We are using Tailwind CSS for styling. You can find the documentation [here](https://tailwindcss.com/docs).
3. We are using TypeScript for type-checking. You can find the documentation [here](https://www.typescriptlang.org/docs/).
4. We have implemented the Dark Mode feature in the project. You can find the implementation in the `providers.tsx` file. You can use the `useTheme` hook to access the theme object and the `toggleTheme` function to toggle the theme. A little scaffold is provided in the `components/lp-sections/ThemeSwitch.tsx` file. You can implement it in that component and import into the footer component.

## Using the Button Component

The `Button` component is a customizable button element designed for use throughout the project. Below is a detailed explanation of how to utilize this component in your sections.

### Importing the Button Component

To use the `Button` component in your section, first import it along with any necessary icons or links:

```jsx
import Button from '../components/Button';
```

### Button Props
The `Button` component accepts the following props:

- **text** (optional): The text to be displayed on the button. Default is 'Get Started'.
- **greenTransparent** (optional): A boolean indicating if the button should have a transparent background with a green border and green text. Default is false.
- **whiteTransparent** (optional): A boolean indicating if the button should have a transparent background with a white border and white text. Default is false.
- **transparent** (optional): A boolean indicating if the button should have a fully transparent background with a border. Default is false.
- **href** (required): The URL the button should link to.

### Using the Button Component

To use the `Button` component in your section, simply include it in your JSX code:

```jsx
<Button text="Get Started" greenTransparent={false} whiteTransparent={false} transparent={false} href="/get-started" />
```

### Example

#### Green Transparent Button Example

```jsx
<Button text="Learn More" greenTransparent={true} href="/learn-more" />
```

#### White Transparent Button Example
```jsx
<Button text="Contact Us" whiteTransparent={true} href="/contact" />
```

### Styling Explanation
- Default Button: Green background with white text.
- Green Transparent Button: Transparent background with green border and green text.
- White Transparent Button: Transparent background with white border and white text.

Use these variations to fit the styling needs of different sections of your project.
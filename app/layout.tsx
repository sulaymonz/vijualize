import "./globals.css";
import ReduxProvider from "./ReduxProvider";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Vijualize",
  description:
    "A website for generating color palettes and visualizing them on amazing designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-black bg-white">
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

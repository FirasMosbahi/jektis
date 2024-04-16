import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomPage from "@jektis/components/generic/CustomPage";
import Center, { Axes } from "@jektis/components/generic/center";
import Header from "@jektis/components/layout/header";
import Footer from "@jektis/components/layout/footer";
import { Roboto } from "next/font/google";

const dm_serif = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "300", "400", "500", "700", "900"],
});
export const metadata: Metadata = {
  title: "Jektis Travel",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/logo_footer.png" />
      </head>
      <body className={`${dm_serif.className}`}>
        <CustomPage>
          <Center axe={Axes.x}>
            <div className="lg:mb-0 w-full lg:mb-20">
              <Header />
            </div>
          </Center>
          <div className="px-2 w-full">{children}</div>
          <div className="w-full mt-4 pb-4 px-2">
            <Footer />
          </div>
        </CustomPage>
      </body>
    </html>
  );
}

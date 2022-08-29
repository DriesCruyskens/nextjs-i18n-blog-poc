import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    // flex is used for positioning the footer at the bottom.
    // https://www.reddit.com/r/Frontend/comments/k1zj0z/how_to_make_footer_stay_at_bottom_of_page_without/
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

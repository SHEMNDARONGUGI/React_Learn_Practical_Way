import { IoCartOutline } from "react-icons/io5";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            Shopper
            <IoCartOutline />
          </h1>
        </div>

        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
}

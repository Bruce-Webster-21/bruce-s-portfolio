import Image from "next/image";
import logo from "@/public/icons/tab-icon.svg";

const Header = () => {
  return <Image className="invert" src={logo} width={60} alt="Logo" />;
};

export default Header;

import { Link } from "react-router";
import {useState} from "react";
import Button from "./Button";

// interface NavbarProps {
//       children: string;
//       heading?: string;

//       onClick: () => void;
// }

export default function Navbar() { 
      const [page, changePage] = useState(false);
      return (
    <div className="">
      <p>Navbar</p>
      <Button onClick={() => changePage(true) }> NMR Fundamentals</Button>
      <Button onClick={() => changePage(true) }> Course Usage</Button>
      <Button onClick={() => changePage(true) }> Faculty Research</Button>
      <Button onClick={() => changePage(true) }> About this Project</Button>
      <Link to="/how-it-works">buobwos</Link>
    </div>
  );
}

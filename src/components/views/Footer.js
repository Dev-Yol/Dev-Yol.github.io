import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <p>
        <strong className="white">Bulma</strong> by{" "}
        <Link to="http://jgthms.com">Jeremy Thomas</Link>. The source code is
        licensed
        <Link to="http://opensource.org/licenses/mit-license.php">MIT</Link>.
        The website content is licensed
        <Link to="http://creativecommons.org/licenses/by-nc-sa/4.0/">
          CC BY NC SA 4.0
        </Link>
        .
      </p>
    </div>
  );
}

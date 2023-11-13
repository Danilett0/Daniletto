import React from "react";

function Header({Title = "El Blog de Daniletto", SubTitle="Tecnología, Desarrollo Web y Más"}) {
  return (
    <div className="Banner">
      <img
        src="/images//Blog//Banner-blog-daniletto.webp"
        alt="Banner blog daniletto"
        width="100%"
        height="100%"
      />
      <div className="Title">
        <h1>{Title}</h1>
        <h2>{SubTitle}</h2>
      </div>
    </div>
  );
}

export default Header;

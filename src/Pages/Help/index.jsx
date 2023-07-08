import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/index";

function Help() {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex justify-around bg-gray-1 h-screen">
        <div className="flex flex-col justify-center itens-center">
          <p className="defaultPageText">
            Create a account in &apos;MarvelSnapZone&apos;.
          </p>
          <p className="defaultPageText">
            To use your collection, click on &apos;Sync your collection&apos;
            and provide your MarvelSnapZone username.
          </p>
          <div className="flex justify-center itens-center">
            <button
              onClick={() => navigate("/")}
              type="button"
              className="defaultButton"
            >
              Go to home
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Help;

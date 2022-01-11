import React, { useContext } from "react";
import ActiveLink from "../ActiveLink";
import { AppContext } from "../../context/AppContext";

export const NavLinks = (props) => {
  const { cartOrders } = useContext(AppContext);

  return (
    <>
      <style jsx>{`
        .nav-link {
          text-decoration: none;
          font-size: 24px;
          font-weight: 500;
          padding-bottom: 0.2rem;
          padding-right: 0.5rem;
          text-align: center;
          font-family: "Braveheart", serif;

        }
        .active {
          border-bottom: 3px solid #005eb8;
          color: #005eb8;
          padding-bottom: 0.2rem;
        }
        .nav-link:hover,
        .nav-link:active {
          border-bottom: 3px solid #005eb8;
          color: #005eb8;
          padding-bottom: 0.2rem;
        }
        @media screen and (min-width: 768px) {
          .nav-link {
            font-size: 32px;
            padding-right: 1.0rem;
            padding-bottom: 0.8rem;
          }
          .active {
            padding-bottom: 0.8rem;
          }
          .nav-link:hover,
          .nav-link:active {
            border-bottom: 3px solid #005eb8;
            color: #005eb8;
            padding-bottom: 0.8rem;
          }
          @media screen and (min-width: 1023px) {
            .nav-link {
              font-size: 40px;
              padding-right: 2rem;
              padding-bottom: 0.8rem;
            }
            .active {
              padding-bottom: 0.8rem;
            }
            .nav-link:hover,
            .nav-link:active {
              border-bottom: 3px solid #005eb8;
              color: #005eb8;
              padding-bottom: 0.8rem;
            }
        }
      `}</style>
      <ActiveLink activeClassName="active" href={`/`}>
        <a className="nav-link mx-2">Home</a>
      </ActiveLink>

      <ActiveLink activeClassName="active" href={`/menu`}>
        <a className="nav-link mx-2 place-content-center">Menu</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href={`/profile`}>
        <a className="nav-link mx-2">
          <i className="fas fa-user"></i>
        </a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href={`/cart`}>
        <a className="nav-link mx-2 relative">
          <i className="fas fa-shopping-cart"></i>
          {cartOrders.length > 0 && (
            <span
              className="text-2xl text-white font-medium rounded-full absolute -top-0 right-0 bg-scotland-blue"
              style={{
                borderRadius: "50%",
                padding: "1px 6px",
                top: "-10px",
                right: "12px",
              }}
            >
              {cartOrders.length}
            </span>
          )}
        </a>
      </ActiveLink>
    </>
  );
};

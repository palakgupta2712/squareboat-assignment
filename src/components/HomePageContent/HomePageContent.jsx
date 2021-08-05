import React from "react";
import { Card } from "react-bootstrap";
import image from "../../img/solaytic.png";
import headerImg from "../../img/mainimg.jpg";
import { Link } from "react-router-dom";

function HomePageContent() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          {" "}
          <h1 style={{ color: "white" }}>Welcome to MyJobs</h1>
          <button
            style={{
              backgroundColor: "#43AFFF",
              color: "white",
              border: "none",
              outline: "none",
              padding: "10px 15px",
              borderRadius: "5px",
            }}
          >
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/register"
            >
              Get Started
            </Link>
          </button>
        </div>

        <img src={headerImg} />
      </div>
      <h5>Why Us</h5>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Card style={{ width: "18rem", marginTop: "20px" }}>
          <Card.Body>
            <Card.Title style={{ color: "#43AFFF" }}>
              {" "}
              Get More Visibility
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              nibh condimentum, auctor risus bibendum, aliquam metus. Vestibulum
              sagittis interdum augue, ac ultrices est fringilla sit amet.
            </Card.Text>
          </Card.Body>
        </Card>{" "}
        <Card style={{ width: "18rem", marginTop: "20px" }}>
          <Card.Body>
            <Card.Title style={{ color: "#43AFFF" }}>
              Organize Your Candidates{" "}
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              nibh condimentum, auctor risus bibendum, aliquam metus. Vestibulum
              sagittis interdum augue, ac ultrices est fringilla sit amet.
            </Card.Text>
          </Card.Body>
        </Card>{" "}
        <Card style={{ width: "18rem", marginTop: "20px" }}>
          <Card.Body>
            <Card.Title style={{ color: "#43AFFF" }}>
              Verify their Abilities{" "}
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              nibh condimentum, auctor risus bibendum, aliquam metus. Vestibulum
              sagittis interdum augue, ac ultrices est fringilla sit amet.
            </Card.Text>
          </Card.Body>
        </Card>{" "}
      </div>
      <h5>Companies who trust us</h5>
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: "20px", margin: 0 }}
      >
        <img src={image} width="150px" />
        <img src={image} width="150px" />
        <img src={image} width="150px" />
        <img src={image} width="150px" />
        <img src={image} width="150px" />
        <img src={image} width="150px" />
      </div>
    </div>
  );
}

export default HomePageContent;

import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";

const EmailInfo = () => {
    const [user] = useAuthState(auth);
  const [emailInfo, setEmailInfo] = useState([]);
  console.log(emailInfo);
  useEffect(() => {
    fetch("https://dry-oasis-82123.herokuapp.com/message")
      .then((res) => res.json())
      .then((data) => setEmailInfo(data));
  }, []);

  const handleDeleteEmail = (id) => {
    const confirmDelete = window.confirm("Are you want to delete this Email!!");
    if (confirmDelete) {
      const url = `https://dry-oasis-82123.herokuapp.com/message/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("delete successfully", data);
          const result = emailInfo.filter((info) => info._id !== id);
          setEmailInfo(result);
          toast("Email deleted successfully");
        });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-5">User : {user?.displayName}</h1>
        <h1 className="mt-5">Customer Feedback :</h1>

        <div className="mb-5 mt-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {emailInfo.map((info, index) => (
                <tr index={index} key={info._id} info={info}>
                  <td>{index + 1}</td>
                  <td>{info.name}</td>
                  <td>{info.email}</td>
                  <td>{info.details}</td>

                  <td>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDeleteEmail(info._id)}
                      className="text-danger border border-primary ps-1 pe-1 cursor-pointer"
                    >
                      <i className="fa fa-trash"></i>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default EmailInfo;

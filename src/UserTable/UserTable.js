import { Component } from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import TableData from "../Components/TableData";
import StatisticsWidgets from "../Components/StatisticsWidgets/StatisticsWidgets";
import { Audio } from "react-loader-spinner";
import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failed: "FAILED",
};

class UserTable extends Component {
  state = {
    userData: [],
    loading: apiStatusConstants.initial,
    cardInfo: { totalUsers: 0, totalMales: 0, totalFemales: 0, totalActive: 0 },
  };

  componentDidMount = () => {
    this.getUserDataFromApi();
  };

  getUserDataFromApi = async () => {
    const apiUrl = "https://gorest.co.in/public/v1/users";
    const options = {
      Method: "GET",
      Headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer 5d820860359195f5be7dcd70ce78bcd8e95d5f5042978d16983766a143808c36",
      },
    };
    const response = await fetch(apiUrl);
    const result = await response.json();
    this.setState(
      {
        userData: result.data,
        loading: apiStatusConstants.success,
      },
      this.setCardInfo
    );
  };

  setCardInfo = () => {
    const {userData } = this.state;

    const totalMalesCount = userData.filter((eachItem) => {
      if (eachItem.gender === "male") {
        let count = 0;

        count = count + 1;
        return count;
      }
    });

    const totalFemalesCount = userData.filter((eachItem) => {
      if (eachItem.gender === "female") {
        let count = 0;

        count = count + 1;
        return count;
      }
    });

    const totalActiveCount = userData.filter((eachItem) => {
      if (eachItem.status === "active") {
        let count = 0;

        count = count + 1;
        return count;
      }
    });

    const newCountInfo = {
      totalUsers: userData.length,
      totalMales: totalMalesCount.length,
      totalFemales: totalFemalesCount.length,
      totalActive: totalActiveCount.length,
    };

    this.setState({ cardInfo: newCountInfo });
  };

  render() {
    const { userData, cardInfo, loading } = this.state;
    const { totalUsers, totalMales, totalFemales, totalActive } = cardInfo;
    return (
      <>
        <div className="container">
          <div className="row pt-4">
            <div className="col-12 mb-3">
              <Link to="/">Go Back</Link>
            </div>
            <div className="row mb-4">
              <div className="col-12 col-lg-3">
                <StatisticsWidgets infoName="Users" info={totalUsers} />
              </div>
              <div className="col-12 col-lg-3">
                <StatisticsWidgets infoName="Males" info={totalMales} />
              </div>
              <div className="col-12 col-lg-3">
                <StatisticsWidgets infoName="Females" info={totalFemales} />
              </div>
              <div className="col-12 col-lg-3">
                <StatisticsWidgets infoName="Active" info={totalActive} />
              </div>
            </div>

            <div className="col-3">
              <h1 className="pb-4">User Table</h1>
            </div>
            <div className="col-6"></div>
            <div className="col-3 text-end">
              <Popup
                trigger={
                  <button type="button" className="btn btn-success">
                    Add User
                  </button>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header"> Add New User</div>
                    <div className="content">
                      <input
                        type="text"
                        placeholder="Please enter Name"
                        className="mb-3"
                      />
                      <input
                        type="text"
                        placeholder="Please enter Email"
                        className="mb-3"
                      />
                      <select>
                        <option id="1">Male</option>
                        <option id="2">Female</option>
                      </select>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
            <div className="col-12 text-center">
              {/* table  */}

              {loading === apiStatusConstants.success ? (
                <div className="table-responsive">
                  <table className="table table-success table-striped ">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData.map((user) => (
                        <TableData key={user.id} user={user} />
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="mx-auto">
                  <Audio />
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserTable;

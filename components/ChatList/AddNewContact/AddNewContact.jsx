import React, { useEffect, useState } from "react";
import SearchBar from "../Default/SearchBar";
import { Card, Spinner } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch } from "react-redux";
import { searchUsers } from "@/store/user/action";
import Image from "next/image";
import appConstants from "@/helper/constant";

const AddNewContact = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchContacts, setSearchContacts] = useState([]);
  const [searchingContacts, setSearchingContacts] = useState(false);

  useEffect(() => {
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery.length) {
      return;
    }

    setSearchingContacts(true);
    const getUsers = async () => {
      const response = await dispatch(searchUsers(trimmedQuery)).unwrap();
      const users = response.data.data;
      setSearchContacts(users);
      setSearchingContacts(false);
    };

    const getContactTimer = setTimeout(getUsers, 300);

    return () => {
      clearTimeout(getContactTimer);
    };
  }, [searchQuery, dispatch]);

  const onSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <div
      className="card mb-0 overflow-auto br-0"
      style={{ flex: 1, boxShadow: "none" }}
    >
      <SearchBar
        placeholder="Search your friend by email or name"
        onSearchChangeHandler={onSearchChange}
        value={searchQuery}
      />
      <PerfectScrollbar>
        <Card className="mb-0 br-0 h-100">
          {!searchQuery.trim().length ? (
            <p className="text-center text-primary fs-6">
              Search and find some friends
            </p>
          ) : null}

          {searchQuery.trim().length && searchingContacts ? (
            <p className="text-center mt-3 mb-2">
              <Spinner animation="border" size="md" variant="primary" />
            </p>
          ) : null}
          {searchQuery.trim().length && searchContacts.length ? (
            <Card.Body className="pt-0  border-0">
              <ul className="main-chat-list tab-pane h-auto">
                {searchContacts.map((contact) => {
                  return (
                    <li className="media new border-0 px-2" key={contact._id}>
                      <div className="main-img-user online">
                        <Image
                          // width={50}
                          // height={50}
                          fill
                          className="brround cover-image"
                          alt={
                            contact?.profile?.profileImageURL
                              ? `Profile pic of ${contact?.profile?.fullName}`
                              : "Blank profile avatar"
                          }
                          src={
                            contact?.profile?.profileImageURL
                              ? `${appConstants.AWS_S3_PUBLIC_BUCKET_URL}/${contact?.profile?.profileImageURL}`
                              : "/assets/images/png/blank-profile-avatar.png"
                          }
                        />
                      </div>
                      <div className="media-body">
                        <div className="media-contact-name">
                          <span>{contact?.profile?.fullName}</span>{" "}
                          <span></span>
                        </div>
                        <p className="d-flex align-items-center gap-1">
                          <span>{contact?.profile?.about}</span>
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* <!-- main-chat-list --> */}
            </Card.Body>
          ) : null}
          {searchQuery.trim().length &&
          !searchingContacts &&
          !searchContacts.length ? (
            <div className="text-center">
              <p className="fs-7 text-primary">
                No relevent user found with this email and name.
              </p>
              <button className="btn btn-outline-primary">
                Let&apos;s Invite +
              </button>
            </div>
          ) : null}
        </Card>
      </PerfectScrollbar>
      &nbsp;
    </div>
  );
};

export default AddNewContact;

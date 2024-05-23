import React, { useState } from "react";
import { Accordion, Card, Form, InputGroup } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import Image from "next/image";

import PasswordField from "@/components/UI/PasswordField";
import { useAuthCtx } from "@/context/AuthCTX";
import appConstants from "@/helper/constant";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { profileUpdate } from "@/store/user/action";
import { toastConfig } from "@/helper/toast";

const Profile = () => {
  const dispatch = useDispatch();
  const { userDetails, updateUserDetailsToContext } = useAuthCtx();
  const { fullName, about } = userDetails.profile;

  const [isFullNameEditable, setIsFullNameEditable] = useState(false);
  const [newFullName, setNewFullName] = useState(fullName);

  const [isAboutEditable, setIsAboutEditable] = useState(false);
  const [newAbout, setNewAbout] = useState(about);

  const changeEditState = (setState) => () => setState((prev) => !prev);
  const updateProfileChangeHandler = (setState) => (event) =>
    setState(event.target.value);

  const handleSaveFullName = async () => {
    const isFullNameValid = newFullName.trim().length > 0;
    if (!isFullNameValid) {
      toast.error("Please enter full name");
      return;
    }
    await dispatch(
      profileUpdate({
        updateType: "fullname",
        userData: { fullName: newFullName },
      })
    )
      .unwrap()
      .then((response) => {
        if (response.status === 200) {
          setIsFullNameEditable(false);
          updateUserDetailsToContext({
            profile: {
              ...userDetails.profile,
              fullName: newFullName,
            },
          });
          toast.success(response?.data?.message);
        } else {
          toast.error(response?.data?.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleSaveAbout = async () => {
    const isAboutValid = newAbout.trim().length > 0;
    if (!isAboutValid) {
      toast.error("Please enter about");
      return;
    }
    await dispatch(
      profileUpdate({
        updateType: "about",
        userData: { about: newAbout },
      })
    )
      .unwrap()
      .then((response) => {
        if (response.status === 200) {
          setIsAboutEditable(false);
          updateUserDetailsToContext({
            profile: {
              ...userDetails.profile,
              about: newAbout,
            },
          });
          toast.success(response?.data?.message);
        } else {
          toast.error(response?.data?.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <Card
        className="br-0 overflow-hidden p-0 m-0"
        style={{ boxShadow: "none", flex: 1 }}
      >
        <PerfectScrollbar>
          <Card.Body>
            <div className="text-center chat-image mb-5">
              <div className="avatar avatar-xxl brround cover-image bg-transparent">
                <Image
                  // width={50}
                  // height={50}
                  fill
                  className="brround cover-image"
                  alt={
                    userDetails?.profile?.profileImageURL
                      ? `Your photo as ${userDetails?.profile?.fullName}`
                      : "Blank profile avatar"
                  }
                  src={
                    userDetails?.profile?.profileImageURL
                      ? `${appConstants.AWS_S3_PUBLIC_BUCKET_URL}/${userDetails?.profile?.profileImageURL}`
                      : "/assets/images/png/blank-profile-avatar.png"
                  }
                />
                <span className="badge rounded-pill avatar-icons bg-primary">
                  <i className="fe fe-camera fs-12"></i>
                </span>
              </div>
            </div>

            <Form.Group>
              <div className="d-flex align-items-center gap-1">
                <Form.Label htmlFor="exampleInputname" className="">
                  Full Name{" "}
                </Form.Label>
                {!isFullNameEditable ? (
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={changeEditState(setIsFullNameEditable)}
                  >
                    <i className="fe fe-edit-3 text-primary mx-2"></i>
                  </span>
                ) : null}
              </div>
              {isFullNameEditable ? (
                <>
                  <Form.Control
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                    value={newFullName}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSaveFullName();
                      }
                    }}
                    onChange={updateProfileChangeHandler(setNewFullName)}
                  />
                  <div className="text-end py-2">
                    <button
                      className="btn btn-primary me-2"
                      onClick={handleSaveFullName}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={changeEditState(setIsFullNameEditable)}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-primary fs-6 px-2">{fullName}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="exampleInputname" className="">
                Email{" "}
              </Form.Label>
              <p className="text-primary fs-6 px-2">{userDetails.email}</p>
            </Form.Group>
            <Form.Group>
              <div className="d-flex align-items-center gap-1">
                <Form.Label htmlFor="exampleInputname" className="">
                  About{" "}
                </Form.Label>
                {!isAboutEditable ? (
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={changeEditState(setIsAboutEditable)}
                  >
                    <i className="fe fe-edit-3 text-primary mx-2"></i>
                  </span>
                ) : null}
              </div>
              {isAboutEditable ? (
                <>
                  <input
                    name="about"
                    type="text"
                    className="form-control mb-4 "
                    placeholder="I am chating on Chat Cast"
                    value={newAbout}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSaveAbout();
                      }
                    }}
                    onChange={updateProfileChangeHandler(setNewAbout)}
                    rows={3}
                  ></input>
                  <div className="text-end py-2">
                    <button
                      className="btn btn-primary me-2"
                      onClick={handleSaveAbout}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={changeEditState(setIsAboutEditable)}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-primary fs-6 px-2">{about}</p>
              )}
            </Form.Group>

            <Accordion defaultActiveKey="0" className="mt-6">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Update Password</Accordion.Header>
                <Accordion.Body>
                  <PasswordField
                    label={"Current Password"}
                    placeholder="Current Password"
                    name={"Current Password"}
                    value=""
                    changeHandler={() => {}}
                  />
                  <PasswordField
                    label={"New Password"}
                    placeholder="New Password"
                    name={"New Password"}
                    value=""
                    changeHandler={() => {}}
                  />
                  <PasswordField
                    label={"Confirm Password"}
                    placeholder="Confirm Password"
                    name={"Confirm Password"}
                    value=""
                    changeHandler={() => {}}
                  />
                  <div className="text-end">
                    <button className="btn btn-primary me-2">Update</button>
                    <button className="btn btn-danger ">Cancel</button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </PerfectScrollbar>
      </Card>
    </>
  );
};

export default Profile;

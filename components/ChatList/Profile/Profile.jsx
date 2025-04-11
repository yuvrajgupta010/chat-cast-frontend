import React, { useState } from "react";
import { Accordion, Card, Form, Spinner } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import Image from "next/image";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import axios from "axios";

import PasswordField from "@/components/UI/PasswordField";
import { useAuthCtx } from "@/context/AuthCTX";
import appConstants from "@/helper/constant";
import { getProfilePictureUploadUrl, profileUpdate } from "@/store/user/action";
import changePasswordVaildation from "@/helper/yup/profile";

const Profile = () => {
  const dispatch = useDispatch();
  const { userDetails, updateUserDetailsToContext } = useAuthCtx();
  const { fullName, about } = userDetails.profile;

  const [isFullNameEditable, setIsFullNameEditable] = useState(false);
  const [newFullName, setNewFullName] = useState(fullName);
  const [isFullNameSubmitting, setIsFullNameSubmitting] = useState(false);

  const [isAboutEditable, setIsAboutEditable] = useState(false);
  const [newAbout, setNewAbout] = useState(about);
  const [isAboutSubmitting, setIsAboutSubmitting] = useState(false);

  const [isPasswordSubmitting, setIsPasswordSubmitting] = useState(false);

  const [profilePicture, setProfilePicture] = useState(null);
  const [isProfilePictureUpdating, setIsProfilePictureUpdating] =
    useState(false);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema: changePasswordVaildation,
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: async (values, { resetForm }) => {
      setIsPasswordSubmitting(true);

      try {
        const response = await dispatch(
          profileUpdate({
            updateType: "password",
            userData: values,
          })
        ).unwrap();
        if (response) {
          if (response.status === 200) {
            toast.success(response?.data?.message);
          } else {
            toast.error(response?.data?.message);
          }
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsPasswordSubmitting(false);
        resetForm();
      }
    },
  });

  const changeEditState = (setState) => () => setState((prev) => !prev);
  const updateProfileChangeHandler = (setState) => (event) =>
    setState(event.target.value);

  const handleSaveFullName = async () => {
    const isFullNameValid = newFullName.trim().length > 0;
    if (!isFullNameValid) {
      toast.error("Please enter full name");
      return;
    }
    setIsFullNameSubmitting(true);
    await dispatch(
      profileUpdate({
        updateType: "fullname",
        userData: { fullName: newFullName },
      })
    )
      .unwrap()
      .then((response) => {
        if (response) {
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
        }
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => setIsFullNameSubmitting(false));
  };

  const handleSaveAbout = async () => {
    const isAboutValid = newAbout.trim().length > 0;
    if (!isAboutValid) {
      toast.error("Please enter about");
      return;
    }
    setIsAboutSubmitting(true);
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
      })
      .finally(() => setIsAboutSubmitting(false));
  };

  const onFileInput = async (e) => {
    e.preventDefault();
    const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB in bytes
    const target = e.target;
    const files = target.files || [];
    const selectedFile = files[0];

    if (selectedFile) {
      if (selectedFile.size > MAX_FILE_SIZE) {
        toast.error("Image size should be less than 4MB");
        return;
      }
      if (
        selectedFile.type === "image/png" ||
        selectedFile.type === "image/jpeg" ||
        selectedFile.type === "image/jpg" ||
        selectedFile.type === "image/webp"
      ) {
        setIsProfilePictureUpdating(true);

        try {
          const data = {
            fileName: selectedFile.name,
            contentType: selectedFile.type,
          };

          const uploadUrlResponse = await dispatch(
            getProfilePictureUploadUrl(data)
          ).unwrap();

          if (!uploadUrlResponse) {
            throw new Error("Something went wrong");
          }

          if (uploadUrlResponse.status !== 200) {
            throw new Error(uploadUrlResponse?.data?.message);
          }

          const signedURL = uploadUrlResponse?.data?.data?.presignedURL;

          await axios.put(signedURL, selectedFile, {
            headers: {
              "Content-Type": selectedFile.type,
            },
          });

          updateUserDetailsToContext({
            profile: {
              ...userDetails.profile,
              profileImageURL: `${uploadUrlResponse?.data?.data?.profileImageURL}`,
            },
          });
        } catch (error) {
          toast.error(error.message);
        } finally {
          setIsProfilePictureUpdating(false);
        }
        // console.log(fileUploadReponse);
      } else {
        toast.error(
          "Please provide profile image in .png, .jpg, .jpeg, .webp format"
        );
        return;
      }
    }
  };

  const profileImageURL = userDetails?.profile?.profileImageURL;

  return (
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
                style={{
                  opacity: isProfilePictureUpdating ? 0.5 : 1,
                }}
                alt={
                  profileImageURL
                    ? `Your photo as ${userDetails?.profile?.fullName}`
                    : "Blank profile avatar"
                }
                src={
                  profileImageURL
                    ? userDetails?.accountAuthType === "google"
                      ? profileImageURL
                      : `${appConstants.AWS_S3_PUBLIC_BUCKET_URL}/${profileImageURL}`
                    : "/assets/images/png/blank-profile-avatar.png"
                }
              />
              {isProfilePictureUpdating ? (
                <Spinner animation="border" size="sm" variant="primary" />
              ) : null}

              <input
                type="file"
                id="file-input"
                className="d-none"
                accept=".jpg,.jpeg,.png,.webp"
                onInput={onFileInput}
              />
              <label htmlFor="file-input" style={{ cursor: "pointer" }}>
                <span className="badge rounded-pill avatar-icons bg-primary">
                  <i className="fe fe-camera fs-12"></i>
                </span>
              </label>
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
                    disabled={isFullNameSubmitting}
                  >
                    {isFullNameSubmitting ? "Saving..." : "Save"}
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
                    disabled={isAboutSubmitting}
                  >
                    {isAboutSubmitting ? "Saving..." : "Save"}
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

          <Accordion defaultActiveKey="1" className="mt-6">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Update Password</Accordion.Header>
              <Accordion.Body>
                <form onSubmit={handleSubmit}>
                  <PasswordField
                    label={"Current Password"}
                    placeholder="Current Password"
                    name={"currentPassword"}
                    value={values.currentPassword}
                    changeHandler={handleChange}
                    blurHandler={handleBlur}
                  />
                  {touched.currentPassword && errors.currentPassword ? (
                    <p className="text-danger">{errors.currentPassword}</p>
                  ) : null}
                  <PasswordField
                    label={"New Password"}
                    placeholder="New Password"
                    name={"newPassword"}
                    value={values.newPassword}
                    changeHandler={handleChange}
                    blurHandler={handleBlur}
                  />
                  {touched.newPassword && errors.newPassword ? (
                    <p className="text-danger">{errors.newPassword}</p>
                  ) : null}
                  <PasswordField
                    label={"Confirm Password"}
                    placeholder="Confirm Password"
                    name={"confirmPassword"}
                    value={values.confirmPassword}
                    changeHandler={handleChange}
                    blurHandler={handleBlur}
                  />
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <p className="text-danger">{errors.confirmPassword}</p>
                  ) : null}
                  <div className="text-end">
                    <button
                      className="btn btn-primary me-2"
                      type="submit"
                      disabled={isPasswordSubmitting}
                    >
                      {isPasswordSubmitting ? "Updating..." : "Update"}
                    </button>
                    <button className="btn btn-danger" onClick={handleReset}>
                      Cancel
                    </button>
                  </div>
                </form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </PerfectScrollbar>
    </Card>
  );
};

export default Profile;

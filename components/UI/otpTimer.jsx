import React, { useState, useEffect } from "react";

const ResendOtp = ({ resendClickHandler = () => {} }) => {
  const [otpTimer, setOtpTimer] = useState(10); // 120 seconds = 2 minutes

  useEffect(() => {
    let timer = setInterval(() => {
      setOtpTimer((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [otpTimer]);

  const handleResendOTP = () => {
    // Handle resend OTP logic here
    // For demonstration, I'm resetting the timer and disabling the resend option
    resendClickHandler();
    setOtpTimer(10);
  };

  return (
    <div className="d-flex justify-content-end">
      {otpTimer === 0 ? (
        <p
          className="mt-2 text-primary"
          style={{ cursor: "pointer" }}
          onClick={handleResendOTP}
        >
          Resend OTP
        </p>
      ) : (
        <p className="mt-2 text-primary" style={{ cursor: "not-allowed" }}>
          Resend OTP in {otpTimer} seconds
        </p>
      )}
    </div>
  );
};

export default React.memo(ResendOtp);

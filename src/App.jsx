import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp.jsx";
import Login from "./Pages/Login.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage.jsx";
import OtpVerificationPage from "./Pages/OtpVerificationPage.jsx";
import ResetPasswordPage from "./Pages/ResetPasswordPage.jsx";
import UserProfileUpdatePage from "./Pages/UserProfileUpdatePage.jsx";
import UserProfileNotificationPage from "./Pages/UserProfileNotificationPage.jsx";
import AboutUsPage from "./Pages/AboutUsPage.jsx";
import ResourcesPage from "./Pages/ResourcesPage.jsx";
import ArticlesPage from "./Pages/ArticlesPage.jsx";
import VerticalFarmingPage from "./Pages/VerticalFarmingPage.jsx";
import CommunityPage from "./Pages/CommunityPage.jsx";
import SignUpPopUpPage from "./Pages/SignUpPopUpPage.jsx";
import LoginPopUpPage from "./Pages/LoginPopUpPage.jsx";
import UserProfileCourse from "./Components/UserProfile/UserProfileCourse/UserProfileCourse.jsx";
import UserProfileLearningHistory from "./Components/UserProfile/UserProfileLearningHistory/UserProfileLearningHistory.jsx";
import UserProfileChangePassword from "./Components/UserProfile/UserProfileChangePassword/UserProfileChangePassword.jsx";
import UserProfileBookmarkedResources from "./Components/UserProfile/UserProfilebookmarkedResources/UserProfilebookmarkedResources.jsx";
import UserProfileCertificates from "./Components/UserProfile/UserProfileCertificates/UserProfileCertificates.jsx";
import UserProfileCommunity from "./Components/UserProfile/UserProfileCommunity/UserProfileCommunity.jsx"
import UserProfileHelpCentre from "./Components/UserProfile/UserProfileHelpCentre/UserProfileHelpCentre.jsx";
import HydroponicFarmingPage from "./Pages/HydroponicFarmingPage.jsx";
import PasswordChangePopup from "./Components/PassordChangePopup/PasswordChangePopup.jsx";
import PasswordChangePopupPage from "./Pages/PasswordChangePopupPage.jsx";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="otpVerification" element={<OtpVerificationPage />} />
        <Route path="resetPassword" element={<ResetPasswordPage />} />
        <Route path="userProfileUpdate" element={<UserProfileUpdatePage />} />
        <Route
          path="userProfileNotification"
          element={<UserProfileNotificationPage />}
        />
        <Route path="aboutUs" element={<AboutUsPage />} />
        <Route path="courses" element={<ResourcesPage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="verticalFarming" element={<VerticalFarmingPage />} />

        <Route path="hydroponicFarming" element={<HydroponicFarmingPage />}/>
        <Route path="community" element={<CommunityPage/>}/>
        <Route path="signUpPopUpPage" element={<SignUpPopUpPage />}/>

        <Route path="community" element={<CommunityPage />} />
        <Route path="signUpPopUpPage" element={<SignUpPopUpPage />} />
        <Route path="loginPopUpPage" element={<LoginPopUpPage />} />
        <Route path="userProfileCourse" element={<UserProfileCourse />} />
        <Route
          path="userProfileLearningHistory"
          element={<UserProfileLearningHistory />}
        />
        <Route
          path="userProfileChangePassword"
          element={<UserProfileChangePassword />}
        />
        <Route
          path="UserProfileBookmarkedResources"
          element={<UserProfileBookmarkedResources />}
        />
        <Route
          path="userprofilecertificates"
          element={<UserProfileCertificates />}
        />
        <Route path="userProfileCommunity" element={<UserProfileCommunity />} />
        <Route path="userProfileHelpCentre" element={<UserProfileHelpCentre />} />
        <Route path="passwordChangePopupPage" element={<PasswordChangePopupPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

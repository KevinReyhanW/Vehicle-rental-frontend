import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRoute from "./utils/routes/publicRoute";
import PrivateRoute from "./utils/routes/privateRoute";
import LandingPage from "./pages/LandingPage/index.jsx";
import Profile1 from "./pages/ProfileUser/profile1";
import History from "./pages/History";
import Signup from "./pages/Auth/signup";
import SignupAdmin from "./pages/Auth/signupAdmin";
import Signin from "./pages/Auth/signin";
import SigninAdmin from "./pages/Auth/signinAdmin";
import ForgotPassword from "./pages/Auth/forgotPassword";
import ForgotPasswordAdmin from "./pages/Auth/forgotPasswordAdmin";
import ResetPassword from "./pages/Auth/resetPassword";
import ResetPasswordAdmin from "./pages/Auth/resetPasswordAdmin";
import AddVehicle from "./pages/AddVehicle";
import Payment from "./pages/Payment/payment";
import VehicleType from "./pages/VehicleType";
import EditVehicle from "./pages/EditVehicle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC AUTH ROUTE */}
        <Route element={<PublicRoute />}></Route>

        {/* MAIN */}
        {/* PRIVATE ROUTE */}
        <Route element={<PrivateRoute />}></Route>
        <Route path="/profile" element={<Profile1 />} />
        <Route path="/payment" element={<Payment />} />

        {/* PRIVATE ADMIN ROUTE */}
        <Route element={<PrivateRoute isAdmin={true} />}></Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-admin" element={<SignupAdmin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signin-admin" element={<SigninAdmin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/forgot-password-admin"
          element={<ForgotPasswordAdmin />}
        />
        <Route path="/reset-password/:OTPReset" element={<ResetPassword />} />
        <Route
          path="/reset-password-admin/:OTPReset"
          element={<ResetPasswordAdmin />}
        />
        <Route path="/add-vehicle" element={<AddVehicle />} />
        <Route path="/vehicle-type" element={<VehicleType />} />
        <Route path="/edit-vehicle" element={<EditVehicle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

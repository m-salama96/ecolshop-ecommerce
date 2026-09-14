import "./Profile.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { WishlistContext } from "../../Context/WishlistContext";

import {
  CiUser,
  CiMail,
  CiPhone,
  CiLocationOn,
  CiEdit,
  CiLock,
} from "react-icons/ci";

function Profile() {
  const [user, setUser] = useState(null);

  const { wishlist } = useContext(WishlistContext);
  const wishCont = wishlist.length;

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");

    if (!confirmLogout) {
      return;
    }

    try {
      await signOut(auth);

      alert("You have been logged out successfully.");

      navigate("/login");
    } catch (error) {
     
      alert(error.message);
    }
  };

  return (
    <div className="profile-page py-2">
      <div className="container">
        <div className="profile-wrapper">
          {/* Profile Header */}
          <div className="profile-header">
            <div className="profile-avatar">
              <CiUser />
            </div>

            <div className="profile-title">
              <h1>My Profile</h1>
              <p>Manage your account information</p>
            </div>

            <button type="button" className="edit-profile-btn">
              <CiEdit />
              Edit Profile
            </button>
          </div>

          <div className="row g-4">
            {/* Personal Information */}
            <div className="col-lg-8">
              <div className="profile-card">
                <div className="card-title">
                  <h2>Personal Information</h2>
                  <p>Your personal account information</p>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="profile-info">
                      <CiUser />

                      <div>
                        <span>Full Name</span>
                        <strong>{user?.displayName || ""}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="profile-info">
                      <CiMail />

                      <div>
                        <span>Email Address</span>
                        <strong>{user?.email || ""}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="profile-info">
                      <CiPhone />

                      <div>
                        <span>Phone Number</span>
                        <strong>
                          <strong>+20 1068 8374 32</strong>
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="profile-info">
                      <CiLocationOn />

                      <div>
                        <span>Address</span>
                        <strong>Egypt-cairo</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Settings */}
              <div className="profile-card mt-4">
                <div className="card-title">
                  <h2>Account Settings</h2>
                  <p>Manage your account preferences</p>
                </div>

                <div className="settings-list">
                  <Link to="/orders" className="setting-item">
                    <div>
                      <h3>My Orders</h3>
                      <p>View your previous and current orders</p>
                    </div>

                    <span>›</span>
                  </Link>

                  <Link to="/wishlist" className="setting-item">
                    <div>
                      <h3>My Wishlist</h3>
                      <p>View products you saved for later</p>
                    </div>

                    <span>›</span>
                  </Link>

                  <button type="button" className="setting-item">
                    <div>
                      <h3>Change Password</h3>
                      <p>Update your account password</p>
                    </div>

                    <CiLock />
                  </button>
                </div>
              </div>
            </div>

            {/* Account Side Card */}
            <div className="col-lg-4">
              <div className="account-card">
                <div className="account-avatar">
                  <CiUser />
                </div>

                <h2>{user?.displayName || ""}</h2>

                <p>{user?.email || ""}</p>

                <div className="account-divider"></div>

                <div className="account-stat">
                  <span>Orders</span>
                  <strong>0</strong>
                </div>

                <div className="account-stat">
                  <span>Wishlist</span>
                  <strong>{wishCont}</strong>
                </div>

                <div className="account-divider"></div>

                <button
                  type="button"
                  className="logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

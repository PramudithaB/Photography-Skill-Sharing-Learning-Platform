import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [mode, setMode] = useState('sign-in');

  // Set default mode on mount
  useEffect(() => {
    setMode('sign-in');
  }, []);

  // Mimic delay for visual mode switch if needed
  useEffect(() => {
    const timer = setTimeout(() => {
      setMode('sign-in');
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // 💡 One-time refresh to fix CSS conflict
  useEffect(() => {
    const refreshTimer = setTimeout(() => {
      if (performance.navigation.type !== 1) {
        window.location.reload();
      }
    }, 0); 

    return () => clearTimeout(refreshTimer);
  }, []);

  const toggle = () => {
    setMode((prev) => (prev === 'sign-in' ? 'sign-up' : 'sign-in'));
  };
  return (
    <div>
      <div id="container" className={`container ${mode}`}>
        {/* FORM SECTION */}
        <div className="row">
          {/* SIGN UP */}
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <div className="input-group">
                  <i className="bx bxs-user" />
                  <input type="text" placeholder="Username" name="username" />
                </div>
                <div className="input-group">
                  <i className="bx bx-mail-send" />
                  <input type="email" placeholder="Email" name="email" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-bio" />
                  <input type="text" placeholder="Bio" name="bio" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-profile" />
                  <input type="file" name="profilePic" />
                </div>

                {/* Interests (Multi-select dropdown) */}
                <div className="input-group">
                  Interests
                  <i className="bx bxs-interests" />
                  <select name="interests" multiple>
                    <option value="coding">Coding</option>
                    <option value="cooking">Cooking</option>
                    <option value="photography">Photography</option>
                    <option value="DIY crafts">DIY Crafts</option>
                    <option value="music">Music</option>
                  </select>
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt" />
                  <input type="password" placeholder="Password" name="password" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt" />
                  <input type="password" placeholder="Confirm Password" name="confirmPassword" />
                </div>

                <button type="submit">Sign up</button>
                <p>
                  <span>Already have an account?</span>
                  <b onClick={toggle} className="pointer">Sign in here</b>
                </p>
              </div>

            </div>
          </div>
          {/* END SIGN UP */}

          {/* SIGN IN */}
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="input-group">
                  <i className="bx bxs-user" />
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt" />
                  <input type="password" placeholder="Password" />
                </div>
                <button > Sign in</button>
                <p><b>Forgot password?</b></p>
                <p>
                  <span>Don't have an account?</span>
                  <b onClick={toggle} className="pointer">Sign up here</b>
                </p>
              </div>
            </div>
          </div>
          {/* END SIGN IN */}
        </div>

        {/* CONTENT SECTION */}
        <div className="row content-row">
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>Welcome</h2>
            </div>
            <div className="img sign-in" />
          </div>
          <div className="col align-items-center flex-col">
            <div className="img sign-up" />
            <div className="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

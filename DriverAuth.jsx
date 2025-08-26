import { useState } from "react";
import { loginDriver, registerDriver } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export default function DriverAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await loginDriver({ email, password });
        console.log("Driver login success:", response.data);
        navigate("/driver/dashboard");
      } else {
        const driverData = {
          fullName,
          email,
          password,
          phone,
          vehicleNumber,
          licenseNumber,
        };
        const response = await registerDriver(driverData);
        console.log("Driver registered:", response.data);
        navigate("/driver/dashboard");
      }
    } catch (error) {
      console.error("Auth failed:", error);
      alert("Authentication failed. Check console for details.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2 style={styles.title}>{isLogin ? "Driver Login" : "Driver Registration"}</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={styles.input}
                required
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={styles.input}
                required
              />
              <input
                type="text"
                placeholder="Vehicle Number"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value)}
                style={styles.input}
                required
              />
              <input
                type="text"
                placeholder="License Number"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
                style={styles.input}
                required
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <button
          onClick={() => setIsLogin(!isLogin)}
          style={styles.switchButton}
        >
          {isLogin ? "Switch to Register" : "Switch to Login"}
        </button>
      </div>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #6b73ff, #000dff)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  formBox: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 15px 25px rgba(0,0,0,0.3)",
    width: "350px",
    transition: "all 0.3s ease",
  },
  title: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#333",
    letterSpacing: "1px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px 15px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "0.3s",
  },
  button: {
    padding: "12px 15px",
    marginTop: "15px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(45deg, #6b73ff, #000dff)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
  switchButton: {
    marginTop: "15px",
    background: "transparent",
    border: "none",
    color: "#000dff",
    cursor: "pointer",
    textDecoration: "underline",
    transition: "0.3s",
  },
};

// Optional hover effects
// You can add these in a CSS file instead of inline styles

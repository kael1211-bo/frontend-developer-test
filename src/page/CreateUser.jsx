import { useState } from "react";

function CreateUser() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",

    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },

    phone: "",
    website: "",

    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value,
      },
    });
  };

  const handleGeoChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      address: {
        ...formData.address,
        geo: {
          ...formData.address.geo,
          [name]: value,
        },
      },
    });
  };

  const handleCompanyChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      company: {
        ...formData.company,
        [name]: value,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    })
      .then((response) => response.json())

      .then((data) => {
        console.log("Created user:", data);

        setMessage("User created successfully!");

        setFormData({
          name: "",
          username: "",
          email: "",

          address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
              lat: "",
              lng: "",
            },
          },

          phone: "",
          website: "",

          company: {
            name: "",
            catchPhrase: "",
            bs: "",
          },
        });
      })

      .catch((error) => {
        console.error("Error:", error);

        setError("Failed to create user");
      });
  };

  return (
    <div className="container">
      <h1>Create User</h1>

      {message && <p className="success">{message}</p>}

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <h2>Basic Information</h2>

        <div>
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Username</label>

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <h2>Address</h2>

        <div>
          <label>Street</label>

          <input
            type="text"
            name="street"
            value={formData.address.street}
            onChange={handleAddressChange}
            required
          />
        </div>

        <div>
          <label>Suite</label>

          <input
            type="text"
            name="suite"
            value={formData.address.suite}
            onChange={handleAddressChange}
            required
          />
        </div>

        <div>
          <label>City</label>

          <input
            type="text"
            name="city"
            value={formData.address.city}
            onChange={handleAddressChange}
            required
          />
        </div>

        <div>
          <label>Zipcode</label>

          <input
            type="text"
            name="zipcode"
            value={formData.address.zipcode}
            onChange={handleAddressChange}
            required
          />
        </div>

        <h2>Location</h2>

        <div>
          <label>Latitude</label>

          <input
            type="text"
            name="lat"
            value={formData.address.geo.lat}
            onChange={handleGeoChange}
            required
          />
        </div>

        <div>
          <label>Longitude</label>

          <input
            type="text"
            name="lng"
            value={formData.address.geo.lng}
            onChange={handleGeoChange}
            required
          />
        </div>

        <h2>Contact</h2>

        <div>
          <label>Phone</label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Website</label>

          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        <h2>Company</h2>

        <div>
          <label>Company Name</label>

          <input
            type="text"
            name="name"
            value={formData.company.name}
            onChange={handleCompanyChange}
            required
          />
        </div>

        <div>
          <label>Catch Phrase</label>

          <input
            type="text"
            name="catchPhrase"
            value={formData.company.catchPhrase}
            onChange={handleCompanyChange}
            required
          />
        </div>

        <div>
          <label>Business</label>

          <input
            type="text"
            name="bs"
            value={formData.company.bs}
            onChange={handleCompanyChange}
            required
          />
        </div>

        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default CreateUser;

import { useState } from "react";



function InputForm(props) {
    return (
    <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>{props.label}</label>
        <input
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onInputChange}
        />
    </div>
    );
}

export default function CartForm(props) {
    const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    });


    function onInputChange(evt) {
    const field = evt.target.name;
    const value = evt.target.value;
    const newState = { ...userData };
    newState[field] = value;
    setUserData(newState);
    }

    function clearData(evt) {
        evt.preventDefault();
    setUserData({
        name: "",
        email: "",
        phone: "",
    });
    }

    function onSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(userData);
    }

    let arrayUserData = Object.keys(userData);

    return (
    <form onSubmit={onSubmit}>
        {arrayUserData.map((field) => (
        <InputForm
            key={field}
            name={field}
            vonInputalue={userData[field]}
            Change={onInputChange}
            label={field}
        />
        ))}
        <button className="btn"
        disabled={
            !(
            userData.name !== "" &&
            userData.phone !== "" &&
            userData.email !== ""
            )
        }
        type="submit"
    >
        Crear orden
        </button>
        <button className="btn" onClick={clearData}>Limpiar Datos</button>
    </form>
    );
}
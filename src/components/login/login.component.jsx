import { useState } from "react"

export default function Login() {

    const [form, setForm] = useState({})

    function onValueChange(e) {
        const value = e.target.value;
        const name = e.target.name
        const updatedFormValue = { ...form, [name]: value };
        setForm(updatedFormValue);
    }

    async function submitLoginForm(e) {
        e.preventDefault();
        const response = await fetch("API_URL", { body: JSON.stringify(form), method: "post" });
        const json = await response.json();
        console.log(json);
    }

    return <div className="login-container animated fadeInDown bootstrap snippets bootdeys">
        <div className="loginbox bg-white">
            <div className="loginbox-title">SIGN IN</div>
            <div className="loginbox-social">
                <div className="social-title ">Connect with Your Social Accounts</div>
                <div className="social-buttons">
                    <a href="" className="button-facebook">
                        <i className="social-icon fa fa-facebook"></i>
                    </a>
                    <a href="" className="button-twitter">
                        <i className="social-icon fa fa-twitter"></i>
                    </a>
                    <a href="" className="button-google">
                        <i className="social-icon fa fa-google-plus"></i>
                    </a>
                </div>
            </div>
            <form onSubmit={submitLoginForm}>
                <div className="loginbox-or">
                    <div className="or-line"></div>
                    <div className="or">OR</div>
                </div>
                <div className="loginbox-textbox">
                    <input type="text" className="form-control" placeholder="Email" name="email" onChange={onValueChange} />
                </div>
                <div className="loginbox-textbox">
                    <input type="text" className="form-control" placeholder="Password" name="password" onChange={onValueChange} />
                </div>
                <div className="loginbox-forgot">
                    <a href="">Forgot Password?</a>
                </div>
                <div className="loginbox-submit">
                    <input type="submit" className="btn btn-primary btn-block" value="Login" />
                </div>
            </form>
            <div className="loginbox-signup">
                <a href="#register.html">Sign Up With Email</a>
            </div>
        </div>
        <div className="logobox">
        </div>


    </div>
}
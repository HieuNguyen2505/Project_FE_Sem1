import "./SignUp.css"

const SignUp = () => {
    return (<>
        <div>
            <form>
                <div>
                    <h1>Đăng ký</h1>
                    <p>Hãy nhập vào ô trống để tạo tài khoản</p>
                    <label><b>Email</b></label>
                    <input type="text" placeholder="Enter email" name="email"></input>
                    <label><b>Tên đăng nhập</b></label>
                    <input type="text" placeholder="Nhập tên đăng nhập" name="account"></input>
                    <label><b>Mật khẩu</b></label>
                    <input type="password" placeholder="Nhập mật khẩu" name="password"></input>
                    <label><b>Nhập lại mật khẩu</b></label>
                    <input type="password" placeholder="Nhập lại mật khẩu" name="repeat-password"></input>
                    <p>Bằng cách tạo một tài khoản, bạn đồng ý với  <a href="#">Điều khoản & Quyền riêng tư</a>.</p>
                </div>
                <div class="cancle-signup-btn">
                    <input type="button" value={"Cancle"} class="cancle-btn"></input>
                    <input type="button" value={"Sign Up"} class="signup-btn"></input>
                </div>
            </form>
        </div>
    </>);
};

export default SignUp;
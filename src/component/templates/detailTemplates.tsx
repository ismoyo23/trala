import React from "react";
import { useDispatch } from "react-redux";
import { UseTypedSelector } from "reduxs/hooks/useTypeSelector";
import { SignIn } from "reduxs/action/Auth";
import { Content } from "reduxs/action/Content";
import { Logout } from "reduxs/action/Logout";

// component
import { NavbarMolecules } from "component/molecules/menuMolecules/navabarMolecules";
import { SideBarMolecules } from "component/molecules/menuMolecules/sideBarMolecules";
import { DetailOrganism } from "component/organism/detailOrganism";
import { LoginMolecules } from "component/molecules/authMolecules/loginMolecules";
import { RegisterMolecules } from "component/molecules/authMolecules/registerMolecules";

import { FooterMolecules } from "component/molecules/menuMolecules/footerMolecules";
export const DetailTemplates = () => {
  const dispatch = useDispatch();
  const [togle, setTogle] = React.useState(false);
  const [loginModal, setLoginModal] = React.useState(false);
  const [registerModal, setRegisterModal] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [number, setNumber] = React.useState("");
  const { content } = UseTypedSelector((state) => state.content);
  const { auth } = UseTypedSelector((state) => state.auth);

  React.useEffect(() => {
    dispatch(Content());
  }, []);

  const actionLogin = () => {
    if (username == "" || password == "") {
      alert("username atau password tidak boleh kosong");
    } else {
      dispatch(SignIn(username, password));
      setLoginModal(false);
    }
  };

  const SignOut = () => {
    dispatch(Logout());
  };

  const actionRegister = () => {
    if (
      name == "" ||
      email == "" ||
      password == "" ||
      confirmPassword == "" ||
      username == "" ||
      number == ""
    ) {
      alert("form tidak boleh kosong");
    } else {
      if (password != confirmPassword) {
        alert("password tidak sama");
      } else {
        dispatch(SignIn("testing.qubisa", "123456"));

        setRegisterModal(false);
        setUsername("");
        setPassword("");
        setEmail("");
        setConfirmPassword("");
        setNumber("");
        setName("");
        alert("Register Berhasil");
      }
    }
  };
  return (
    <div className="h-[100%]">
      {loginModal == false ? null : (
        <LoginMolecules
          actionLogin={actionLogin}
          Login={() => setLoginModal(false)}
          username={(e: any) => setUsername(e.target.value)}
          valUsername={username}
          password={(e: any) => setPassword(e.target.value)}
          valPassword={password}
        />
      )}

      {registerModal == false ? null : (
        <RegisterMolecules
          Register={() => setRegisterModal(false)}
          actionRegister={actionRegister}
          name={(e) => setName(e.target.value)}
          valName={name}
          email={(e) => setEmail(e.target.value)}
          valEmail={email}
          number={(e) => setNumber(e.target.value)}
          valNumber={number}
          confirmPassword={(e) => setConfirmPassword(e.target.value)}
          valConfirmPassword={confirmPassword}
          username={(e) => setUsername(e.target.value)}
          valUsername={username}
          password={(e) => setPassword(e.target.value)}
          valPassword={password}
        />
      )}
      <div className="mt-[0]">
        <NavbarMolecules
          Register={() => setRegisterModal(true)}
          Logout={() => SignOut()}
          auth={auth}
          Login={() => setLoginModal(!loginModal)}
          action={() => setTogle(!togle)}
        />
        <SideBarMolecules togle={togle} action={() => setTogle(!togle)} />
      </div>
      <div className="h-[90px] w-full md:h-[116px]"></div>
      <div className=" h-[100%]">
        {/* content */}
        <DetailOrganism content={content} />
        <div className="absolute bottom-[3] w-[100%]">
          <FooterMolecules />
        </div>
      </div>
    </div>
  );
};

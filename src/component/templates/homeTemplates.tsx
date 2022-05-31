import React from "react";

import { UseTypedSelector } from "reduxs/hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { SignIn } from "reduxs/action/Auth";
import { Slide } from "reduxs/action/Slide";
import { Articels } from "reduxs/action/Articels";
import { Content } from "reduxs/action/Content";
import { Logout } from "reduxs/action/Logout";
import { Category } from "reduxs/action/Category";

// component
import { NavbarMolecules } from "component/molecules/menuMolecules/navabarMolecules";
import { SideBarMolecules } from "component/molecules/menuMolecules/sideBarMolecules";
import { HomeOrganism } from "component/organism/homeOrganism";
import { FooterMolecules } from "component/molecules/menuMolecules/footerMolecules";
import { LoginMolecules } from "component/molecules/authMolecules/loginMolecules";
import { RegisterMolecules } from "component/molecules/authMolecules/registerMolecules";

export const HomeTemplates = () => {
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
  const { auth } = UseTypedSelector((state) => state.auth);
  const { slider } = UseTypedSelector((state) => state.slider);
  const { content } = UseTypedSelector((state) => state.content);
  const { articels } = UseTypedSelector((state) => state.articels);
  const { category } = UseTypedSelector((state) => state.category);

  React.useEffect(() => {
    dispatch(Slide());
    dispatch(Content());
    dispatch(Articels());
    dispatch(Category());
  }, []);

  const actionLogin = () => {
    if (username == "" || password == "") {
      alert("form username dan password kosong");
    } else {
      dispatch(SignIn(username, password));
      setLoginModal(false);
      setUsername("");
      setPassword("");
      alert("Login Berhasil");
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
          auth={auth}
          Register={() => setRegisterModal(true)}
          action={() => setTogle(!togle)}
          Login={() => setLoginModal(!loginModal)}
          Logout={() => SignOut()}
        />
        <SideBarMolecules togle={togle} action={() => setTogle(!togle)} />
      </div>
      <div className="h-[90px] w-full md:h-[116px]"></div>
      <div className=" h-[100%]">
        <HomeOrganism
          slideShow={slider}
          content={content}
          articels={articels}
          category={category}
        />

        <div className="absolute bottom-[3] w-[100%]">
          <FooterMolecules />
        </div>
      </div>
    </div>
  );
};

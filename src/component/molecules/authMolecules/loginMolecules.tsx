import React from "react";

import { Input } from "component/atom/input";
import { Texts } from "component/atom/texts";
import { Images } from "component/atom/images";
import { Buttons } from "component/atom/button";

// svg
import logo from "assets/icon-navbar/logo.svg";

interface LoginProps {
  Login: () => void;
  username: (e: any) => void;
  valUsername: string;
  password: (e: any) => void;
  valPassword: string;
  actionLogin: () => void;
}
export const LoginMolecules = ({
  Login,
  username,
  valUsername,
  password,
  valPassword,
  actionLogin,
}: LoginProps) => {
  return (
    <div>
      <div className="bg-[black] opacity-[0.7] z-20 w-[100%] h-[100%] fixed"></div>
      <div className="w-[100%] h-[100%] flex justify-center content-center">
        <div className="w-[400px] mt-[69px] h-[460px] fixed z-30 bg-[white]">
          <div className="flex mr-[10px]">
            <Buttons action={Login} label="X" css="ml-[auto] mt-[2]" />
          </div>
          <div className="w-[100%]">
            <div className="flex mt-[-10px] justify-center contentp-center">
              <div className="flex  w-[230px]">
                <Images url={logo} css="w-[40px] h-[40px]" />
                <Texts
                  font="nunito"
                  label="Bergabung sekarang, gratis"
                  css="text-[13px] ml-[10px] mt-[4px] text-[#262626]"
                />
              </div>
            </div>
            <hr className="mt-[10px]" />
          </div>
          <div className="px-8 pt-8">
            <div className="w-[100%]">
              <Texts
                font="nunito"
                css="text-[14px] mb-[10px]"
                label="username / email"
              />
              <div className="h-[40px] border-[1px] border-[#DCDCDC] w-[100%]">
                <Input
                  type="text"
                  val={valUsername}
                  placeholder="Masukkan username atau email perusahaan "
                  css=" ml-[17px] w-[90%]  h-[34px] outline-0  placeholder:font-nunito placeholder:text-[14px] placeholder:text-[#DCDCDC] placeholder:ml-[10px]"
                  change={username}
                />
              </div>
            </div>

            <div className="mt-[15px]">
              <Texts
                font="nunito"
                css="text-[14px] mb-[10px]"
                label="password"
              />
              <div className="h-[40px] border-[1px] border-[#DCDCDC] w-[100%]">
                <Input
                  type="password"
                  val={valPassword}
                  placeholder="Masukkan password"
                  css="  w-[90%] ml-[17px] outline-0 h-[37px] placeholder:font-nunito placeholder:text-[14px] placeholder:text-[#DCDCDC] placeholder:ml-[10px]"
                  change={password}
                />
              </div>
            </div>

            <div className="flex mt-[9px] w-[100%]">
              <Texts
                label="Lupa sandi?"
                font="nunito"
                css="text-[red] text-[14px] ml-[auto]"
              />
            </div>

            <div className="mt-[60px]">
              <Buttons
                action={actionLogin}
                label="Masuk"
                css=" w-[100%] h-[42px] bg-[#FF4E4E] text-[white] font-roboto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

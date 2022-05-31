import React from "react";

import { Input } from "component/atom/input";
import { Texts } from "component/atom/texts";
import { Images } from "component/atom/images";
import { Buttons } from "component/atom/button";

// svg
import logo from "assets/icon-navbar/logo.svg";

interface RegisterProps {
  Register: () => void;
  name: (e: any) => void;
  valName: string;
  email: (e: any) => void;
  valEmail: string;
  confirmPassword: (e: any) => void;
  valConfirmPassword: string;
  number: (e: any) => void;
  valNumber: string;
  username: (e: any) => void;
  valUsername: string;
  password: (e: any) => void;
  valPassword: string;
  actionRegister: () => void;
}

export const RegisterMolecules = ({
  Register,
  name,
  valName,
  email,
  valEmail,
  confirmPassword,
  valConfirmPassword,
  number,
  valNumber,
  username,
  valUsername,
  password,
  valPassword,
  actionRegister,
}: RegisterProps) => {
  return (
    <div>
      <div className="bg-[black] opacity-[0.7] z-20 w-[100%] h-[100%] fixed"></div>
      <div className="w-[100%] h-[100%] flex justify-center content-center">
        <div className="w-[400px] h-[860px] absolute z-30 bg-[white]">
          <div className="flex mr-[10px]">
            <Buttons action={Register} label="X" css="ml-[auto] mt-[2]" />
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
                label="Nama Lengkap"
              />
              <div className="h-[40px] border-[1px] border-[#DCDCDC] w-[100%]">
                <Input
                  type="text"
                  val={valName}
                  placeholder="Masukkan username atau email perusahaan "
                  css=" ml-[17px] w-[90%]  h-[34px] outline-0  placeholder:font-nunito placeholder:text-[14px] placeholder:text-[#DCDCDC] placeholder:ml-[10px]"
                  change={name}
                />
              </div>
            </div>

            <div className="w-[100%] mt-[15px]">
              <Texts font="nunito" css="text-[14px] mb-[10px]" label="Email" />
              <div className="h-[40px] border-[1px] border-[#DCDCDC] w-[100%]">
                <Input
                  type="text"
                  val={valEmail}
                  placeholder="Masukkan username atau email perusahaan "
                  css=" ml-[17px] w-[90%]  h-[34px] outline-0  placeholder:font-nunito placeholder:text-[14px] placeholder:text-[#DCDCDC] placeholder:ml-[10px]"
                  change={email}
                />
              </div>
            </div>

            <div className="w-[100%] mt-[15px]">
              <Texts
                font="nunito"
                css="text-[14px] mb-[10px]"
                label="Username"
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

            <div className="mt-[15px]">
              <Texts
                font="nunito"
                css="text-[14px] mb-[10px]"
                label="Konfirmasi Password"
              />
              <div className="h-[40px] border-[1px] border-[#DCDCDC] w-[100%]">
                <Input
                  type="password"
                  val={valConfirmPassword}
                  placeholder="Konfirmasi Password"
                  css="  w-[90%] ml-[17px] outline-0 h-[37px] placeholder:font-nunito placeholder:text-[14px] placeholder:text-[#DCDCDC] placeholder:ml-[10px]"
                  change={confirmPassword}
                />
              </div>
            </div>

            <div className="mt-[15px]">
              <Texts
                font="nunito"
                css="text-[14px] mb-[10px]"
                label="Nomor Whatsaap"
              />
              <div className="h-[40px] border-[1px] border-[#DCDCDC] w-[100%]">
                <Input
                  type="number"
                  val={valNumber}
                  placeholder="Masukkan Whatsaap"
                  css="  w-[90%] ml-[17px] outline-0 h-[37px] placeholder:font-nunito placeholder:text-[14px] placeholder:text-[#DCDCDC] placeholder:ml-[10px]"
                  change={number}
                />
              </div>
            </div>

            <div className="mt-[130px]">
              <Buttons
                action={actionRegister}
                label="Daftar"
                css=" w-[100%] h-[42px] bg-[#FF4E4E] text-[white] font-roboto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

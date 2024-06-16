import { ChangeEvent } from "react";
import { SignupInput } from "@amitrochates/blog-common";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Auth = ({type}:{type: "signup" | "signin"}) => {
const [postInputs, setPostInputs] = useState<SignupInput>({
    email:"",
    password:"",
    name:""
})

    return <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="">
                        <div className="font-bold text-3xl  px-5 ">
                        {type === "signup" ? "Create an Account" : "Log in to your Account"}
                        </div>
                        <div className="px-5">
                        {type === "signup" ? "Already Have an Account?" : "Don't Have an Account?"}
                        <Link className="pl-2 underline" to={ type === "signup" ? "/signin" : "/signup"} >{type === "signup" ? "Signin" : "Signup"}</Link>
                        </div>
                        <div className="pt-8">
                        <LabelledInput label = "Name" placeholder="Manoj" onChange={(e) => {
                            setPostInputs({
                                ...postInputs, name: e.target.value
                            })
                        }}/>
                        <LabelledInput label = "Email" placeholder="abc@gmail.com" onChange={(e) => {
                            setPostInputs({
                                ...postInputs, email: e.target.value
                            })
                        }}/>
                        <LabelledInput label = "Password" type={"password"} placeholder="****" onChange={(e) => {
                            setPostInputs({
                                ...postInputs, password: e.target.value
                            })
                        }}/>
                        <button type="button" className="w-full text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        {type === "signup" ? "Sign Up" : "Sign in"}
                        </button>
                        </div>
                       
                </div>
            <div>
        </div>

        </div>
    </div>
}
interface LabelledInputType{
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}
function LabelledInput({ label, placeholder, onChange, type} : LabelledInputType) {
    return <div className="pt-2 pb-2">
            <label className="block mb-2 font-medium text-black">{label}</label>
            <input onChange={onChange} type={type||"text"} className=" border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
}